console.log("Script loaded.");

function debug() {
  if (document.getElementById('invitejson').style.display == 'none') {
    document.getElementById('invitejson').style.display = 'block';
  } else {
    document.getElementById('invitejson').style.display = 'none'
  }
}

function getInviteInfo() {
    document.getElementById('invitewait').style.display = 'block'
    document.getElementById('servericon').style.display = 'none'
    document.getElementById('inviteinfo').style.display = 'none'
    var xhttp = new XMLHttpRequest();
    var userinput = document.getElementById("inviteinput").value;
    var urllist = ["https://discordapp.com/api/invites/", "https://discord.gg/", "https://discordapp.com/invite/", "discord.gg/", "discordapp.com/invite/"];
    var serverFeatures = ["VIP_REGIONS", "VERIFIED", "VANITY_URL", "INVITE_SPLASH", "ANIMATED_ICON", "BANNER", "PARTNERNED"]
    
    for (u in urllist) {
        if (userinput.startsWith(urllist[u])) {
            var invitecode = userinput.split(urllist[u], 2)[1];
            break;
        } else {
            var invitecode = userinput;
        }
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
           document.getElementById("invitejson").innerText = this.responseText;
            var jsonResponse = JSON.parse(this.responseText);
            
            document.getElementById("servericon").style.background = "url(https://cdn.discordapp.com/icons/" + jsonResponse.guild.id + "/" + jsonResponse.guild.icon + ".png)";
            
            document.getElementById("inviteservername").innerText = jsonResponse.guild.name;
            
            document.getElementById("invitecode").innerText = jsonResponse.code;
            
            
            document.getElementById('invitewait').innerText = "speeding up."
            
            if (jsonResponse.guild.verification_level == 0) {
                document.getElementById("inviteverifylevel").innerText = "None (Unrestricted)";

                document.getElementById("inviteverifylevel").style.background = "#2C2F33";

            } else if (jsonResponse.guild.verification_level == 1) {
                document.getElementById("inviteverifylevel").innerText = "Low (Verified email address)";

                document.getElementById("inviteverifylevel").style.background = "rgb(67, 181, 129)";

            } else if (jsonResponse.guild.verification_level == 2) {
                document.getElementById("inviteverifylevel").innerText = "Medium (Verified email address, Registered on Discord for more than 5 minutes)";

                document.getElementById("inviteverifylevel").style.background = "rgb(250, 166, 26)";

            } else if (jsonResponse.guild.verification_level == 3) {
                document.getElementById("inviteverifylevel").innerText = "High (Verified email address, Registered on Discord for more than 5 minutes, Must be on server for more than 10 minutes)";

                document.getElementById("inviteverifylevel").style.background = "rgb(245, 119, 49)";

            } else if (jsonResponse.guild.verification_level == 4) {
                document.getElementById("inviteverifylevel").innerText = "Very high (Verified email address, Registered on Discord for more than 5 minutes, Must be on server for more than 10 minutes, Must have a verified phone number)";

                document.getElementById("inviteverifylevel").style.background = "rgb(240, 71, 71)";
            }
            document.getElementById('invitewait').innerText = "speeding up.."
            if (jsonResponse.guild.features.length < 1) {
                document.getElementById("invitefeatures").outerHTML = "<p id='invitefeatures'>None</p>";
            } else {
                document.getElementById("invitefeatures").outerHTML = "<div id='invitefeatures'></div>";
                for (i in jsonResponse.guild.features) {
                    for (f in serverFeatures) {
                        if (jsonResponse.guild.features[i] == serverFeatures[f]) {
                            if (f == 0) {
                                document.getElementById("invitefeatures").innerHTML += "<p>VIP Regions</p>";
                            } else if (f == 1) {
                                document.getElementById("invitefeatures").innerHTML += "<p>Verified</p>";
                            } else if (f == 2) {
                                document.getElementById("invitefeatures").innerHTML += "<p>Vanity URL</p>";
                            } else if (f == 3) {
                                document.getElementById("invitefeatures").innerHTML += "<p>Invite Splash</p>";
                            } else if (f == 4) {
                                
                          if (jsonResponse.guild.icon.startsWith('a')) {document.getElementById("invitefeatures").innerHTML += "<p>Animated Icon</p>";
                            document.getElementById("servericon").style.background = "url(https://cdn.discordapp.com/icons/" + jsonResponse.guild.id + "/" + jsonResponse.guild.icon + ".gif)";
                          }
                            } else if (f == 5) {
                                document.getElementById("invitefeatures").innerHTML += "<p>Banner</p>";
                            } else if (f == 6) {
                                document.getElementById("invitefeatures").innerHTML += "<p>Partnered</p>";
                            }
                    }
                    }
            }
            document.getElementById('invitewait').innerText = "speeding up..."
            if (jsonResponse.inviter) {
                document.getElementById('inviteinviter0').style.display = 'block';
                
                document.getElementById('inviteinviter1').style.display = 'block';
                
                document.getElementById('inviteinviter1').innerText = jsonResponse.inviter.username +"#"+ jsonResponse.inviter.discriminator;
            } else {
                document.getElementById('inviteinviter0').style.display = 'none'
                document.getElementById('inviteinviter1').style.display = 'none'
            }
            
            if (jsonResponse.guild.banner == null || undefined) {
            document.getElementById("invitebanner0").style.display = "none"
            
            document.getElementById("invitebanner1").style.display = "none"
            
            document.getElementById("inviteh1").style.display = "none"
            
            document.getElementById("inviteh2").style.display = "none"
            } else {
            document.getElementById("invitebanner1").src = "https://cdn.discordapp.com/banners/" + jsonResponse.guild.id + "/" + jsonResponse.guild.banner + ".jpg";
            
            document.getElementById("invitebanner0").style.display = "block"
            
            document.getElementById("invitebanner1").style.display = "block"
            
            document.getElementById("inviteh1").style.display = "block"
            
            document.getElementById("inviteh2").style.display = "block"
            };
            if (jsonResponse.guild.description == null || undefined) {
            document.getElementById("invitedesc0").style.display = "none"
            
            document.getElementById("invitedesc1").style.display = "none"
            } else {
            document.getElementById("invitedesc1").innerText = jsonResponse.guild.description;
            
            document.getElementById("invitedesc0").style.display = "block"
            
            document.getElementById("invitedesc1").style.display = "block"
}
    document.getElementById('invitewait').innerText = "Please wait..."
    document.getElementById('servericon').style.display = 'block'
    document.getElementById('inviteinfo').style.display = 'block'
    document.getElementById('invitewait').style.display = 'none'
        }
    };
    };
    xhttp.open("GET", "https://discordapp.com/api/invites/" + invitecode, true);
    xhttp.send();
};