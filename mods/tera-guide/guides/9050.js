// Rift's Edge (Hard) (10-Person)
//
// made by ITunk

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"nd-450-1001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-450-1001-1102-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 375, 0, 3300] }
		],
		"s-450-1001-1115-0": [
			{ type: "text", sub_type: "message", message: "Floor", message_RU: "Атака в пол" },
			{ type: "spawn", func: "vector", args: [553, 50, 75, 0, 700, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, -50, 75, 0, 700, 0, 1400] }
		],
		"s-450-1001-1116-1": [
			{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид" },
			{ type: "spawn", func: "vector", args: [553, 90, 125, 0, 1200, 0, 1600] },
			{ type: "spawn", func: "vector", args: [553, 270, 125, 0, 1200, 0, 1600] }
		],
		"s-450-1001-2102-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 375, 0, 2900] }
		],
		"s-450-1001-2115-0": [
			{ type: "text", sub_type: "message", message: "Floor", message_RU: "Атака в пол" },
			{ type: "spawn", func: "vector", args: [553, 25, 75, 0, 700, 0, 1200] },
			{ type: "spawn", func: "vector", args: [553, -25, 75, 0, 700, 0, 1200] }
		],
		"s-450-1001-2116-1": [
			{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид" },
			{ type: "spawn", func: "vector", args: [553, 90, 125, 0, 1200, 0, 1600] },
			{ type: "spawn", func: "vector", args: [553, 270, 125, 0, 1200, 0, 1600] }
		],

		// 2 BOSS
		"nd-450-1002": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-450-1002-1113-0": [{ type: "text", sub_type: "message", message: "Discarding", message_RU: "Три откида" }],
		"s-450-1002-2113-0": [{ type: "text", sub_type: "message", message: "Discarding", message_RU: "Три откида" }],
		"s-450-1002-1114-0": [{ type: "text", sub_type: "message", message: "Discarding", message_RU: "Три откида" }],
		"s-450-1002-2114-0": [{ type: "text", sub_type: "message", message: "Discarding", message_RU: "Три откида" }],
		"s-450-1002-1115-0": [{ type: "text", sub_type: "message", message: "Flying Attack", message_RU: "Летающая атака" }],
		"s-450-1002-2115-0": [{ type: "text", sub_type: "message", message: "Flying Attack", message_RU: "Летающая атака" }],
		"s-450-1002-1116-0": [{ type: "text", sub_type: "message", message: "A swarm of bees", message_RU: "Рой пчел" }],
		"s-450-1002-2116-0": [{ type: "text", sub_type: "message", message: "A swarm of bees", message_RU: "Рой пчел" }],
		"s-450-1002-1117-0": [{ type: "text", sub_type: "message", message: "Rise (Kaia)", message_RU: "Взлет (Кайя)" }],
		"s-450-1002-2117-0": [{ type: "text", sub_type: "message", message: "Rise (Kaia)", message_RU: "Взлет (Кайя)" }],
		"s-450-1002-1205-0": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_RU: "Чума/Регресс", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_RU: "Регресс", class_position: "mystic" }
		],
		"s-450-1002-1210-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид" }],
		"s-450-1002-2210-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид" }],

		// 3 BOSS
		"nd-450-1003": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-450-1003-1107-2": [{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид" }],
		"s-450-1003-2107-2": [{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид" }],
		"s-450-1003-1115-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид" }],
		"s-450-1003-2115-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид" }],
		"s-450-1003-1313-0": [
			{ type: "text", sub_type: "message", message: "Column", message_RU: "Колонна" },
			{ type: "text", sub_type: "message", delay: 8000, message: "Dodge", message_RU: "Эвейд" }
		],
		"s-450-1003-1315-0": [
			{ type: "text", sub_type: "message", message: "Break Shield", message_RU: "Сломать щит", class_position: ["tank", "dps"] },
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_RU: "Чума/Регресс", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_RU: "Регресс", class_position: "mystic" }
		]
	};
};