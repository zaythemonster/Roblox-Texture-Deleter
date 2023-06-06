const fs = require('fs-extra') 
const path = require('path') 

const ver = path.join(process.env.LOCALAPPDATA, 'Roblox', 'Versions') 

const cya = fs.readdirSync(ver) 

cya.forEach((yes) => {
  const Roblox = path.join(ver, yes, 'PlatformContent', 'pc', 'textures') 

  const Folders = ['brick', 'cobblestone', 'concrete', 'corrodedmetal', 'diamondplate', 'fabric', 'foil', 'glass', 'granite', 'grass', 'ice', 'marble', 'metal', 'pebble', 'plastic', 'sand', 'slate', 'water', 'wood', 'woodplanks'] 

  Folders.forEach((folder) => {
    const ThePath = path.join(Roblox, folder)

    fs.remove(ThePath)
      .then(() => {
        console.log(`\x1b[35mSuccessfully Deleted Textures\x1b[0m:`)
      })
      .catch((err) => {
        console.error(`The Folder ${ThePath} does not exist`, err)
      }) 
  }) 
}) 