import Discord, { Message } from "discord.js";
import { CommandLoader } from "./CommandLoader";
import { Command } from "./interface/Command";
import KEYS from './keys';
const client = new Discord.Client();
const commandLoader = new CommandLoader();

client.once("ready", () => {
	console.log("Ready!");
});

client.on("message", (message: Message) => {
	commandLoader.getCommandList().forEach((command: Command) => command.onMessage(message));
});

client.login(KEYS.botToken);