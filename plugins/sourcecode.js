let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
π§πΊπ, ππΌ ? πΌππ»πΊ ππππππππ πΊππΊ π½πΎπΌπ π¦
`.trim(), 'Lihatlah dia, tahun ini masih ngemis sc wkwk..', 'Owner', '#owner')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
