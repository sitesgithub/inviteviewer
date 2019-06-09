console.log("Script loaded.");

function debug() {
  if (document.getElementById('invitejson').style.display == 'none') {
    document.getElementById('invitejson').style.display = 'block';
  } else {
    document.getElementById('invitejson').style.display = 'none'
  }
}

function getInviteInfo() {
    var userinput = document.getElementById("inviteinput").value;
try {
  document.getElementById('invitewait').innerText = "If you have a slow connection, ignore this. There was an unexpected error while sending the request. Try again later."
  jsonResponse
}
catch(err) {
  if (err.response === null || undefined) {
    document.getElementById('invitewait').innerText = "If you have a slow connection, ignore this. There was an unexpected error while sending the request. Try again later."
  } else {
    document.getElementById('invite').innerText = "Invitation Code"
    document.getElementById('invitewait').style.display = 'block'
    document.getElementById('servericon').style.display = 'none'
    document.getElementById('inviteinfo').style.display = 'none'
    document.getElementById('invitejson').style.display = 'none'
    var xhttp = new XMLHttpRequest();
    var urllist = ["https://discordapp.com/api/invites/", "https://discord.gg/", "https://discordapp.com/invite/", "discord.gg/", "discordapp.com/invite/"];
    var serverFeatures = ["VIP_REGIONS", "VERIFIED", "VANITY_URL", "INVITE_SPLASH", "ANIMATED_ICON", "BANNER", "PARTNERED", "LURKABLE"]
    
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
            console.log(jsonResponse)
            document.getElementById("servericon").style.background = "url(https://cdn.discordapp.com/icons/" + jsonResponse.guild.id + "/" + jsonResponse.guild.icon + ".png)";
            
            var a = "https://cdn.discordapp.com/icons/" + jsonResponse.guild.id + "/" + jsonResponse.guild.icon + ".png)"
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
            if (jsonResponse.guild.features.length <= 1) {
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
                            } else if (jsonResponse.guild.features[1] == "ANIMATED_ICON") {
                              if (jsonResponse.guild.icon.startsWith('a')) {
                                document.getElementById("invitefeatures").innerHTML += "<p>Animated Icon</p>";
                            document.getElementById("servericon").style.background = "url(https://cdn.discordapp.com/icons/" + jsonResponse.guild.id + "/" + jsonResponse.guild.icon + ".gif)"
                              } else {
                                if (f == 5) {
                                document.getElementById("invitefeatures").innerHTML += "<p>Banner</p>";
                            } else if (f == 6) {
                                document.getElementById("invitefeatures").innerHTML += "<p>Partnered</p>";
                            } else if (f == 7) {
                                document.getElementById("invitefeatures").innerHTML += "<p>Discoverable in Server Discovery</p>";
                                document.getElementById("invitefeatures").innerHTML += "<p>Lurkable</p>";
                            }
                            document.getElementById('invitewait').innerText = "speeding up..."
            
            if (jsonResponse.inviter) {
                document.getElementById('inviteinviter0').style.display = 'block';
                
                document.getElementById('inviteinviter1').style.display = 'block';
                
                document.getElementById('inviteinviter1').innerText = jsonResponse.inviter.username +"#"+ jsonResponse.inviter.discriminator;
                
                document.getElementById('invitericon').style.background = "url(https://cdn.discordapp.com/avatars/"+jsonResponse.inviter.id+"/"+jsonResponse.inviter.avatar + ".png)"
                
                document.getElementById('invitericon').style.display = 'block'
            } else {
                document.getElementById('inviteinviter0').style.display = 'none'
                document.getElementById('inviteinviter1').style.display = 'none'
                document.getElementById('invitericon').style.display = 'none'
                document.getElementById('br').style.display = 'none'
            }
            
            if (jsonResponse.guild.banner == null || undefined) {
            document.getElementById("invitebanner0").style.display = "none"
            
            document.getElementById("invitebanner1").style.display = "none"
            
            document.getElementById("inviteh1").style.display = "none"
            
            document.getElementById("inviteh2").style.display = "none"
            } else {
            document.getElementById("invitebanner1").src = "https://cdn.discordapp.com/banners/" + jsonResponse.guild.id + "/" + jsonResponse.guild.banner + ".jpg?size=256";
            
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

            if (jsonResponse.guild.vanity_url_code == null || undefined) {
              document.getElementById('invite').innerText = "Invitation Code"
              } else {
               
                document.getElementById('vanityurl').style.display = "block"
              document.getElementById('vanitycode').style.display = "block"
              document.getElementById('vanitycode').innerText = jsonResponse.guild.vanity_url_code
              if (invitecode == jsonResponse.guild.vanity_url_code) {
                document.getElementById('vanityurl').style.display = "none"
                document.getElementById('vanitycode').style.display = "none"
                document.getElementById('invite').innerText = "Custom Invitation Code"
              }
            }
            
            if (jsonResponse.guild.splash == null || undefined) {
                document.getElementById('invitesplash').style.display = 'none';
                
                document.getElementById('invitesplash0').src = "";
            } else {
              document.getElementById('invitesplash').style.display = 'block';
                
                document.getElementById('invitesplash0').src = "https://cdn.discordapp.com/splashes/" +jsonResponse.guild.id +"/"+ jsonResponse.guild.splash + ".jpg?size=320";
              
            }
    document.getElementById('invitewait').innerText = "Please wait..."
    document.getElementById('servericon').style.display = 'block'
    document.getElementById('inviteinfo').style.display = 'block'
    document.getElementById('invitewait').style.display = 'none'
        }
    };
    };
                              }
                            }
}
            document.getElementById('invitewait').innerText = "speeding up..."
            
            if (jsonResponse.inviter) {
                document.getElementById('inviteinviter0').style.display = 'block';
                
                document.getElementById('inviteinviter1').style.display = 'block';
                
                document.getElementById('inviteinviter1').innerText = jsonResponse.inviter.username +"#"+ jsonResponse.inviter.discriminator;
                
                document.getElementById('invitericon').style.background = "url(https://cdn.discordapp.com/avatars/"+jsonResponse.inviter.id+"/"+jsonResponse.inviter.avatar + ".png)"
                
                document.getElementById('invitericon').style.display = 'block'
            } else {
                document.getElementById('inviteinviter0').style.display = 'none'
                document.getElementById('inviteinviter1').style.display = 'none'
                document.getElementById('invitericon').style.display = 'none'
                document.getElementById('br').style.display = 'none'
            }
            
            if (jsonResponse.guild.banner == null || undefined) {
            document.getElementById("invitebanner0").style.display = "none"
            
            document.getElementById("invitebanner1").style.display = "none"
            
            document.getElementById("inviteh1").style.display = "none"
            
            document.getElementById("inviteh2").style.display = "none"
            } else {
            document.getElementById("invitebanner1").src = "https://cdn.discordapp.com/banners/" + jsonResponse.guild.id + "/" + jsonResponse.guild.banner + ".jpg?size=256";
            
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

            if (jsonResponse.guild.vanity_url_code == null || undefined) {
              document.getElementById('invite').innerText = "Invitation Code"
              } else {
               
                document.getElementById('vanityurl').style.display = "block"
              document.getElementById('vanitycode').style.display = "block"
              document.getElementById('vanitycode').innerText = jsonResponse.guild.vanity_url_code
              if (invitecode == jsonResponse.guild.vanity_url_code) {
                document.getElementById('vanityurl').style.display = "none"
                document.getElementById('vanitycode').style.display = "none"
                document.getElementById('invite').innerText = "Custom Invitation Code"
              }
            }
            
            if (jsonResponse.guild.splash == null || undefined) {
                document.getElementById('invitesplash').style.display = 'none';
                
                document.getElementById('invitesplash0').src = "";
            } else {
              document.getElementById('invitesplash').style.display = 'block';
                
                document.getElementById('invitesplash0').src = "https://cdn.discordapp.com/splashes/" +jsonResponse.guild.id +"/"+ jsonResponse.guild.splash + ".jpg?size=320";
              
            }
    document.getElementById('invitewait').innerText = "Please wait..."
    document.getElementById('servericon').style.display = 'block'
    document.getElementById('inviteinfo').style.display = 'block'
    document.getElementById('invitewait').style.display = 'none'
        }
    };
    try {
    xhttp.open("GET", "https://discordapp.com/api/invites/" + invitecode, true);
    xhttp.send();
    }
    catch(err) {
      console.log(err.response)
    }
    }

  }
}

