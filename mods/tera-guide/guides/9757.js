// Akeron's Inferno
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"nd-757-1001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-757-1001-1104-0": [{ type: "text", sub_type: "message", message_RU: "Правая рука (откид)", message: "Right Hand (Push)" }],
		"s-757-1001-1117-0": [{ type: "text", sub_type: "message", message_RU: "Удар", message: "Kick (Smash)" }],
		"s-757-1001-1118-0": [{ type: "text", sub_type: "message", message_RU: "Случайный прыжок", message: "Random Jump" }],
		"s-757-1001-1116-0": [{ type: "text", sub_type: "message", message_RU: "Прыжки (танк)", message: "Jumps (Tank)" }],
		"s-757-1001-1107-0": [{ type: "text", sub_type: "message", message_RU: "Передняя атака", message: "Front" }],
		"s-757-1001-1206-0": [{ type: "text", sub_type: "message", message_RU: "Прыжок назад", message: "Jump Back" }],
		"s-757-1001-1109-0": [{ type: "text", sub_type: "message", message_RU: "Переднее АоЕ", message: "Front AoE" }],
		"s-757-1001-1108-0": [{ type: "text", sub_type: "message", message_RU: "Случайный прыжок", message: "Random Jump" }],
		"s-757-1001-2104-0": "s-757-1001-1104-0",
		"s-757-1001-2117-0": "s-757-1001-1117-0",
		"s-757-1001-2118-0": "s-757-1001-1118-0",
		"s-757-1001-2116-0": "s-757-1001-1116-0",
		"s-757-1001-2107-0": "s-757-1001-1107-0",
		"s-757-1001-2206-0": "s-757-1001-1206-0",
		"s-757-1001-2109-0": "s-757-1001-1109-0",
		"s-757-1001-2108-0": "s-757-1001-1108-0",

		// 2 BOSS
		"nd-757-1002": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-757-1002-1105-0": [{ type: "text", sub_type: "message", message_RU: "Огненное дыхание", message: "Fire Breath" }],
		"s-757-1002-1108-0": [{ type: "text", sub_type: "message", message_RU: "Огненные бомбы (спереди)", message: "Fire Bombs" }],
		"s-757-1002-1109-0": [{ type: "text", sub_type: "message", message_RU: "Плавание + Задняя", message: "Swim + Back Attack" }],
		"s-757-1002-1206-0": [{ type: "text", sub_type: "message", message_RU: "Прыжок + Случайная атака", message: "Jump + Random Target" }],
		"s-757-1002-1204-0": [{ type: "text", sub_type: "message", message_RU: "Большое АоЕ", message: "Large AoE", delay: 3000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 6, 630, 3000, 4000] }
		],
		"s-757-1002-1107-0": [{ type: "text", sub_type: "message", message_RU: "Крутилка", message: "Spin" }],
		"s-757-1002-1106-1": [{ type: "text", sub_type: "message", message_RU: "АоЕ + Пламя", message: "AoE + Side Flames", delay: 3000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 3000, 4000] }
		],
		"s-757-1002-1112-0": [{ type: "text", sub_type: "message", message_RU: "Огненные шары (таргет)", message: "Target Fireball" }],
		"s-757-1002-2105-0": "s-757-1002-1105-0",
		"s-757-1002-2108-0": "s-757-1002-1108-0",
		"s-757-1002-2109-0": "s-757-1002-1109-0",
		"s-757-1002-2206-0": "s-757-1002-1206-0",
		"s-757-1002-2204-0": "s-757-1002-1204-0",
		"s-757-1002-2107-0": "s-757-1002-1107-0",
		"s-757-1002-2106-1": "s-757-1002-1106-1",
		"s-757-1002-2112-0": "s-757-1002-1112-0",

		// 3 BOSS
		"nd-757-1003": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-757-1003-1105-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ", message: "AoE" }],
		"s-757-1003-1203-0": [{ type: "text", sub_type: "message", message_RU: "Крутилка", message: "Spin Cut Attack" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 400, 100, 4000] }
		],
		"s-757-1003-1110-0": [{ type: "text", sub_type: "message", message_RU: "Яд (круг)", message: "Poison (Circle)" }],
		"s-757-1003-2105-0": "s-757-1003-1105-0",
		"s-757-1003-2203-0": "s-757-1003-1203-0",
		"s-757-1003-2110-0": "s-757-1003-1110-0",

		// 4 BOSS
		"nd-757-1004": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-757-1004-1105-0": [{ type: "text", sub_type: "message", message_RU: "Передняя атака", message: "Frontal Hit" }],
		"s-757-1004-1106-0": [{ type: "text", sub_type: "message", message_RU: "Случайный выстрел", message: "Random Shot" }],
		"s-757-1004-1107-0": [{ type: "text", sub_type: "message", message_RU: "Случайный кнут", message: "Random Whip" }],
		"s-757-1004-1108-0": [{ type: "text", sub_type: "message", message_RU: "Безопасные круги", message: "Earth Line" }],
		"s-757-1004-1111-0": [{ type: "text", sub_type: "message", message_RU: "Линия земли", message: "Stomp Combo" }],
		"s-757-1004-3108-0": [{ type: "text", sub_type: "message", message_RU: "Эвейд", message: "Dodge" }],
		"s-757-1004-3105-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ атака", message: "AoE Attack" }],
		"s-757-1004-3106-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ бублик", message: "Donut AoE" }],
		"s-757-1004-3103-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ удар", message: "AoE Stomp" }],
		"s-757-1004-4201-0": [{ type: "text", sub_type: "message", message_RU: "Лава", message: "Lava" }],
		"qb-757-405-457016": [{ type: "text", sub_type: "message", message_RU: "ЩИТ", message: "SHIELD" }],
		"s-757-1004-2105-0": "s-757-1004-1105-0",
		"s-757-1004-2106-0": "s-757-1004-1106-0",
		"s-757-1004-2107-0": "s-757-1004-1107-0",
		"s-757-1004-2108-0": "s-757-1004-1108-0",
		"s-757-1004-2111-0": "s-757-1004-1111-0"
	};
};