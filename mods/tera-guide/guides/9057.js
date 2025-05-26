// Akeron's Inferno (Hard)
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;
	let mech_enable = true;

	return {
		// 1 BOSS
		"nd-457-1001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-457-1001-1104-0": [{ type: "text", sub_type: "message", message_RU: "Правая рука (откид)", message: "Right Hand (Push)" }],
		"s-457-1001-1117-0": [{ type: "text", sub_type: "message", message_RU: "Удар", message: "Kick (Smash)" }],
		"s-457-1001-1118-0": [{ type: "text", sub_type: "message", message_RU: "Случайный прыжок", message: "Random Jump" }],
		"s-457-1001-1116-0": [{ type: "text", sub_type: "message", message_RU: "Прыжки (танк)", message: "Jumps (Tank)" }],
		"s-457-1001-1107-0": [{ type: "text", sub_type: "message", message_RU: "Передняя атака", message: "Front" }],
		"s-457-1001-1206-0": [{ type: "text", sub_type: "message", message_RU: "Прыжок назад", message: "Jump Back" }],
		"s-457-1001-1109-0": [{ type: "text", sub_type: "message", message_RU: "Переднее АоЕ", message: "Front AoE" }],
		"s-457-1001-1108-0": [{ type: "text", sub_type: "message", message_RU: "Случайный прыжок", message: "Random Jump" }],
		"s-457-1001-2104-0": "s-457-1001-1104-0",
		"s-457-1001-2117-0": "s-457-1001-1117-0",
		"s-457-1001-2118-0": "s-457-1001-1118-0",
		"s-457-1001-2116-0": "s-457-1001-1116-0",
		"s-457-1001-2107-0": "s-457-1001-1107-0",
		"s-457-1001-2206-0": "s-457-1001-1206-0",
		"s-457-1001-2109-0": "s-457-1001-1109-0",
		"s-457-1001-2108-0": "s-457-1001-1108-0",

		// 2 BOSS
		"nd-457-1002": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-457-1002-1105-0": [{ type: "text", sub_type: "message", message_RU: "Огненное дыхание", message: "Fire Breath" }],
		"s-457-1002-1108-0": [{ type: "text", sub_type: "message", message_RU: "Огненные бомбы (спереди)", message: "Fire Bombs" }],
		"s-457-1002-1109-0": [{ type: "text", sub_type: "message", message_RU: "Плавание + Задняя", message: "Swim + Back Attack" }],
		"s-457-1002-1206-0": [{ type: "text", sub_type: "message", message_RU: "Прыжок + Случайная атака", message: "Jump + Random Target" }],
		"s-457-1002-1204-0": [{ type: "text", sub_type: "message", message_RU: "Большое АоЕ", message: "Large AoE", delay: 3000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 6, 630, 3000, 4000] }
		],
		"s-457-1002-1107-0": [{ type: "text", sub_type: "message", message_RU: "Крутилка", message: "Spin" }],
		"s-457-1002-1106-1": [{ type: "text", sub_type: "message", message_RU: "АоЕ + Пламя", message: "AoE + Side Flames", delay: 3000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 3000, 4000] }
		],
		"s-457-1002-1112-0": [{ type: "text", sub_type: "message", message_RU: "Огненные шары (таргет)", message: "Target Fireball" }],
		"s-457-1002-2105-0": "s-457-1002-1105-0",
		"s-457-1002-2108-0": "s-457-1002-1108-0",
		"s-457-1002-2109-0": "s-457-1002-1109-0",
		"s-457-1002-2206-0": "s-457-1002-1206-0",
		"s-457-1002-2204-0": "s-457-1002-1204-0",
		"s-457-1002-2107-0": "s-457-1002-1107-0",
		"s-457-1002-2106-1": "s-457-1002-1106-1",
		"s-457-1002-2112-0": "s-457-1002-1112-0",

		// 3 BOSS
		"nd-457-1003": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-457-1003-1105-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ", message: "AoE" }],
		"s-457-1003-1203-0": [{ type: "text", sub_type: "message", message_RU: "Крутилка", message: "Spin Cut Attack" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 400, 100, 4000] }
		],
		"s-457-1003-1110-0": [{ type: "text", sub_type: "message", message_RU: "Яд (круг)", message: "Poison (Circle)" }],
		"s-457-1003-2105-0": "s-457-1003-1105-0",
		"s-457-1003-2203-0": "s-457-1003-1203-0",
		"s-457-1003-2110-0": "s-457-1003-1110-0",

		// 4 BOSS
		"nd-457-1004": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-457-1004-99": [{ type: "func", func: () => mech_enable = true }],
		"h-457-1004-20": [{ type: "func", func: () => mech_enable = false }],
		"s-457-1004-1105-0": [{ type: "text", sub_type: "message", message_RU: "Передняя атака", message: "Frontal Hit" }],
		"s-457-1004-1106-0": [
			{ type: "text", sub_type: "message", message_RU: "Случайный выстрел", message: "Random Shot" },
			{ type: "spawn", func: "vector", args: [912, 459, 120, 12, 1150, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 251, 100, -13, 1150, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 360, 0, 0, 1150, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 250, 70, -6, 1150, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 460, 70, 6, 1150, 0, 3000] }
		],
		"s-457-1004-1107-0": [
			{ type: "text", sub_type: "message", message_RU: "Случайный кнут", message: "Random Whip" },
			{ type: "spawn", func: "vector", args: [912, 360, 50, 0, 900, 0, 2000] }
		],
		"s-457-1004-1108-0": [{ type: "text", sub_type: "message", message_RU: "Линия земли", message: "Earth Line" }],
		"s-457-1004-1111-0": [{ type: "text", sub_type: "message", message_RU: "Комбо ударов", message: "Stomp Combo" }],
		"s-457-1004-3108-0": [{ type: "text", sub_type: "message", message_RU: "Эвейд", message: "Dodge" }],
		"s-457-1004-3105-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ атака", message: "AoE Attack" }],
		"s-457-1004-3106-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ бублик", message: "Donut AoE" }],
		"s-457-1004-3103-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ удар", message: "AoE Stomp" }],
		"s-457-1004-4201-0": [{ type: "text", sub_type: "message", message_RU: "Лава", message: "Lava" },
			{ type: "text", sub_type: "message", message_RU: "Безопасные круги", message: "Safe Circles", delay: 1500 },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 12000, pos: { x: -83453, y: 100168, z: 3389 } },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 12000, pos: { x: -83453, y: 100168, z: 3389, w: -2.36 }, ownerName: "SAFE", message: "SAFE" },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 12000, pos: { x: -83463, y: 99177, z: 3389 } },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 12000, pos: { x: -83463, y: 99177, z: 3389, w: 2.38 }, ownerName: "SAFE", message: "SAFE" },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 12000, pos: { x: -84461, y: 99186, z: 3389 } },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 12000, pos: { x: -84461, y: 99186, z: 3389, w: 0.80 }, ownerName: "SAFE", message: "SAFE" },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 12000, pos: { x: -84452, y: 100173, z: 3389 } },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 12000, pos: { x: -84452, y: 100173, z: 3389, w: -0.79 }, ownerName: "SAFE", message: "SAFE" }
		],
		"qb-457-405-457016": [{ type: "text", sub_type: "message", message_RU: "ЩИТ", message: "SHIELD" }],
		"qb-457-1004-457003": [{ type: "text", sub_type: "notification", message_RU: "Убить миньонов", message: "Kill Minions", check_func: () => mech_enable }],
		"s-457-1004-2105-0": "s-457-1004-1105-0",
		"s-457-1004-2106-0": "s-457-1004-1106-0",
		"s-457-1004-2107-0": "s-457-1004-1107-0",
		"s-457-1004-2108-0": "s-457-1004-1108-0",
		"s-457-1004-2111-0": "s-457-1004-1111-0"
	};
};