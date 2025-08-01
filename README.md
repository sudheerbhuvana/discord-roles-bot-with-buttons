# 🎭 Discord Roles Bot with Buttons

A simple, interactive Discord bot that lets your server members **choose roles** using stylish buttons!

---

## 📌 Features

✅ Supports **unlimited role categories**
✅ Users can click buttons to add/remove roles instantly
✅ Fully customizable with **emojis & names**
✅ Works with multiple categories (like `gender`, `branch`, `year`, `color`, etc.)
✅ Includes an **owner-only eval command** for testing/debugging (optional)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sudheerbhuvana/discord-roles-bot-with-buttons.git
cd discord-roles-bot-with-buttons
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create a `.env` File

Create a file named `.env` in the root of the project:

```env
TOKEN=YOUR_DISCORD_BOT_TOKEN
```

Replace `YOUR_DISCORD_BOT_TOKEN` with your bot’s token from the Discord Developer Portal.

---

## ⚙️ Configuration

Open the `config.js` file and customize it for **your server**.

```js
module.exports = {
  token: process.env.TOKEN,
  prefix: "~",
  owners: ["YOUR_USER_ID"],

  activity: ["Playing with roles", "Watching members", "Listening to commands"],

  categories: {
    color: [
      { name: "Red", roleId: "ROLE_ID_HERE", emoji: "🔴" },
      { name: "Blue", roleId: "ROLE_ID_HERE", emoji: "🔵" }
    ],
    gender: [
      { name: "Male", roleId: "ROLE_ID_HERE", emoji: "♂️" },
      { name: "Female", roleId: "ROLE_ID_HERE", emoji: "♀️" }
    ]
    // Add more categories as needed!
  }
};
```

### 🗂️ How to Configure

* Each **category** is an array of roles.
* Each **role** has:

  * `name` → shown on the button.
  * `roleId` → the actual ID of the Discord role in your server.
  * `emoji` → shown on the button.

Example: If you add a `color` category in `config.js`:

```
~create color
```

will create a role selector for the **color** category.

---

## 🕹️ Running the Bot

Run the bot using:

```bash
node index.js
```

Then use your **prefix** + `create` command in any server channel to create role selectors. Example:

```
~create gender
```

This sends an embed with buttons for `gender` roles — users can click to add or remove roles!

---

## 🔒 Owner-only Eval Command

This bot includes an `eval` command to run JavaScript snippets directly from Discord.
**Use this only if you know what you’re doing!**

---

## ✅ Best Practices

* Never share your **bot token** or your **owner ID**.
* Always test new roles/categories in a test channel first.
* Make sure your bot has permission to **manage roles** and send embeds.

---

## 📝 License

This project is licensed under the **MIT License** — free to use, modify & share.

---

**Made with ❤️ by [Sudheer](https://github.com/sudheerbhuvana)**
