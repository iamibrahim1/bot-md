import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import path from 'path'

const owner = [
  ['923229931076'],
  ['923229931076', 'owner', true ]
] // Put your number here
const mods = [] // Want some help?
const prems = [] // Premium user has unlimited limit

const Prefix = new RegExp('^[' + ('‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

const APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  bcil: 'https://75.119.137.248:21587',
  neoxr: 'https://api.neoxr.eu.org/',
  zeks: 'https://api.zeks.me',
  gimez: 'https://masgimenz.my.id/',
  melcanz: 'https://melcanz.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  restapi: 'https://x-restapi.herokuapp.com'
}
const APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'NezukoTachibana281207',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.neoxr.eu.org/': 'jVEMyB2ITJ',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'ZZBk7EBb',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://x-restapi.herokuapp.com': 'BETA'
}

const API = (name, path = '/', query = {}, apikeyqueryname) => (name in APIs ? APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: APIKeys[name in APIs ? APIs[name] : name] } : {}) })) : '')

// Sticker WM
const packname = '@Ibrahim'
const author = 'Ibrahim'
const wm = '© Ibrahim'

const multiplier = 100000000 // The higher, The harder levelup

const rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳︄',
      legendary: '🗃︄',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸︄',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

const dfail = (type, m, conn) => {
    let msg = {
    rowner: 'This command can only be used by _*OWWNER!1!1!*_',
         owner: 'This command can only be used by _*Owner Bot*_!',
         mods: 'This command can only be used by _*Moderator*_ !',
         premium: '*Premium*\n1 Months *Pkr 500*\n1 Years *IDR 5000*\n\nContact our *owner*..',
         banned: 'This command is only for banned users..',
         created: 'This command only creates a base\nExample: #createbase Aine',
         group: 'This command can only be used in groups!',
         private: 'This command can only be used in Private Chats!',
         admin: 'This command is only for *Admins* of the group!',
         botAdmin: 'Make bot *Admin* to use this command!',
         unreg: 'Please register to use this feature by typing:\n\n*#list of names.age*\n\nExample: *#list of Humans.16*',
         restrict: 'This feature is *disabled*!'
    }[type]
    if (msg) return m.reply(msg)
 
}

export { owner, mods, prems, Prefix, APIs, APIKeys, API, packname, author, wm, multiplier, rpg, dfail }

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
