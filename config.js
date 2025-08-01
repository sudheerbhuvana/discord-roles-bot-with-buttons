const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  token: process.env.TOKEN,
  prefix: "~",
  owners: ["781882376790736937"],
  activity: ["with Id cards" ,"Girls", "Sridhar"], //PLAYING, WATCHING, LISTENING
  categories: {
    gender: [
      { name: "Male", roleId: "1399531183456387073", emoji: "968876717550755860" },
      { name: "Female", roleId: "1399531270408507544", emoji: "1158780910381043752" },
      { name: "Other", roleId: "914383647719694356", emoji: "968819647170347048" },
    ],
    branch: [
      { name: "KL Vijayawada", roleId: "1400400473089118279", emoji: "968823117256458240" },
      { name: "KL Hyderabad", roleId: "1400400421104652342", emoji: "968876717550755860" }
    ],
     year: [
      { name: "1st Year", roleId: "1400114873404358717", emoji: "968823117256458240" },
      { name: "2nd Year", roleId: "1400114955600138333", emoji: "968876717550755860" },
      { name: "3rd Year", roleId: "1400115010583265430", emoji: "1158780910381043752" },
      { name: "4th Year", roleId: "1400115053856034927", emoji: "968819647170347048" }
    ],
color: [
  { name: "Sky Blue", roleId: "1400585367471788195", emoji: "1158780910381043752" },
  { name: "Emerald Green", roleId: "1400585558236991629", emoji: "968819647170347048" },
  { name: "Sunset Orange", roleId: "1400587845076389974", emoji: "968876717550755860" },
  { name: "Royal Purple", roleId: "1400587971429924924", emoji: "1202868689859379280" },
  { name: "Lemon Yellow", roleId: "1400588421285679105", emoji: "968823117256458240" },

  { name: "Hot Pink", roleId: "1400589256304361542", emoji: "968876717550755860" },
  { name: "Ocean Teal", roleId: "1400589565235826850", emoji: "1158780910381043752" },
  { name: "Crimson Red", roleId: "1400589737047097445", emoji: "968819647170347048" },
  { name: "Midnight Blue", roleId: "1400590169022660839", emoji: "1202868689859379280" },
  { name: "Bright Gold", roleId: "1400590850156793866", emoji: "968823117256458240" }
],

    maxRoles: [
      { name: "Role 1", roleId: "914383647719694356", emoji: "968876717550755860" },
      { name: "Role 2", roleId: "914383647719694356", emoji: "1158780910381043752" },
      { name: "Role 3", roleId: "914383647719694356", emoji: "968819647170347048" },
      { name: "Role 4", roleId: "914383647719694356", emoji: "1202868689859379280" },
      { name: "Role 5", roleId: "914383647719694356", emoji: "968823117256458240" },

      { name: "Role 6", roleId: "914383647719694356", emoji: "968876717550755860" },
      { name: "Role 7", roleId: "914383647719694356", emoji: "1158780910381043752" },
      { name: "Role 8", roleId: "914383647719694356", emoji: "968819647170347048" },
      { name: "Role 9", roleId: "914383647719694356", emoji: "1202868689859379280" },
      { name: "Role 10", roleId: "914383647719694356", emoji: "968823117256458240" },

      { name: "Role 11", roleId: "914383647719694356", emoji: "968876717550755860" },
      { name: "Role 12", roleId: "914383647719694356", emoji: "1158780910381043752" },
      { name: "Role 13", roleId: "914383647719694356", emoji: "968819647170347048" },
      { name: "Role 14", roleId: "914383647719694356", emoji: "1202868689859379280" },
      { name: "Role 15", roleId: "914383647719694356", emoji: "968823117256458240" },

      { name: "Role 16", roleId: "914383647719694356", emoji: "968876717550755860" },
      { name: "Role 17", roleId: "914383647719694356", emoji: "1158780910381043752" },
      { name: "Role 18", roleId: "914383647719694356", emoji: "968819647170347048" },
      { name: "Role 19", roleId: "914383647719694356", emoji: "1202868689859379280" },
      { name: "Role 20", roleId: "914383647719694356", emoji: "968823117256458240" },

      { name: "Role 21", roleId: "914383647719694356", emoji: "968876717550755860" },
      { name: "Role 22", roleId: "914383647719694356", emoji: "1158780910381043752" },
      { name: "Role 23", roleId: "914383647719694356", emoji: "968819647170347048" },
      { name: "Role 24", roleId: "914383647719694356", emoji: "1202868689859379280" },
      { name: "Role 25", roleId: "914383647719694356", emoji: "968823117256458240" }
    ]
  }
};
