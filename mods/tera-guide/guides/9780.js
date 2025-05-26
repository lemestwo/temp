// Velik's Hold (5-Person)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		// 1 boss
		"nd-780-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-780-1000-102-0": [{ type: "text", sub_type: "message", message: "Stun (Tank)", message_RU: "Стан (танк)" }],
		"s-780-1000-103-0": [{ type: "text", sub_type: "message", message: "Frontal Hits", message_RU: "Передние удары" }],
		"s-780-1000-104-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" }],
		"s-780-1000-109-0": [{ type: "text", sub_type: "message", message: "Push Left", message_RU: "Откид влево" }],
		"s-780-1000-110-0": [{ type: "text", sub_type: "message", message: "Push Right", message_RU: "Откид вправо" }],
		"s-780-1000-112-0": [{ type: "text", sub_type: "message", message: "Jump Forward", message_RU: "Прыжок вперед" }],
		"s-780-1000-113-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_RU: "Прыжок назад" }],
		"s-780-1000-114-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_RU: "Полоса назад" }],
		"s-780-1000-115-0": [{ type: "text", sub_type: "message", message: "Wave Front", message_RU: "Волна вперед" }],
		"s-780-1000-115-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд" }],
		"s-780-1000-202-0": [{ type: "text", sub_type: "message", message: "Jump (Stun)", message_RU: "Прыжок (стан)" }],
		"s-780-1000-108-0": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 2800 }],
		"s-780-1000-302-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" }],
		"s-780-1000-302-1": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 0, 2000] }],
		"s-780-1001-302-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 0, 4000] }],

		// 2 boss
		"nd-780-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-780-2000-105-0": [{ type: "text", sub_type: "message", message: "Heavy Front Attack", message_RU: "Мощный удар вперед" }],
		"s-780-2000-106-0": [{ type: "text", sub_type: "message", message: "Flame Ray (Target)", message_RU: "Полоса (таргет)" }],
		"s-780-2000-106-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 500 }],
		"s-780-2000-107-0": [{ type: "text", sub_type: "message", message: "Whip", message_RU: "Кнут" }],
		"s-780-2000-107-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 1000 }],
		"s-780-2000-108-0": [{ type: "text", sub_type: "message", message: "Front Attack (Stun)", message_RU: "Удар вперед (стан)" }],
		"s-780-2000-301-0": [{ type: "text", sub_type: "message", message: "Jump (Target)", message_RU: "Прыжок (таргет)" }],
		"s-780-2000-301-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 1000 }],
		"s-780-2000-302-0": [{ type: "text", sub_type: "message", message: "AOE (Stand behind a stone)", message_RU: "АОЕ (встать за камень)" }],
		"s-780-2000-303-0": [{ type: "text", sub_type: "message", message: "Circles", message_RU: "Круги" }],
		"s-780-2000-304-0": [{ type: "text", sub_type: "message", message: "Jump", message_RU: "Прыжок" }],
		"s-780-2000-304-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 1000 }],
		"s-780-2001-326-0": [{ type: "spawn", func: "marker", args: [false, 180, 250, 0, 6000, true, null] }], // stone marker

		// 3 boss
		"nd-780-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-780-3000-104-0": [{ type: "text", sub_type: "message", message: "Front Attack", message_RU: "Удар вперед" }],
		"s-780-3000-105-0": [{ type: "text", sub_type: "message", message: "Push Front", message_RU: "Откид вперед" }],
		"s-780-3000-109-0": [{ type: "text", sub_type: "message", message: "Double Front Attack", message_RU: "Двойной удар вперед" }],
		"s-780-3000-110-0": [{ type: "text", sub_type: "message", message: "Wave Front", message_RU: "Волна вперед" }],
		"s-780-3000-111-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Кувырок" }],
		"s-780-3000-112-0": [{ type: "text", sub_type: "message", message: "Target (Front | Back)", message_RU: "Таргет (Передняя | Задняя)" }],
		"s-780-3000-112-2": [{ type: "text", sub_type: "message", message: "Front | Back", message_RU: "Передняя | Задняя" }],
		"s-780-3000-113-0": [{ type: "text", sub_type: "message", message: "Pushback", message_RU: "Откид назад" }],
		"s-780-3000-114-0": "s-780-3000-113-0",
		"s-780-3000-115-0": [{ type: "text", sub_type: "message", message: "Charging", message_RU: "Зарядка" }],
		"s-780-3000-301-0": [{ type: "text", sub_type: "message", message: "Get Out | Get In", message_RU: "От него | К нему" }],
		"s-780-3000-302-0": [{ type: "text", sub_type: "message", message: "Get In", message_RU: "К нему" }],
		"s-780-3000-304-0": [{ type: "text", sub_type: "message", message: "Shot (Target)", message_RU: "Выстрел (таргет)" }],
		"s-780-3000-304-3": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд" }],
		"s-780-3000-306-0": [
			{ type: "text", sub_type: "message", message: "AOE", message_RU: "АОЕ" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 4500 }
		],
		"s-780-3000-307-0": "s-780-3000-306-0",
		"s-780-3000-308-0": [
			{ type: "text", sub_type: "message", message: "AOE (Flying)", message_RU: "АОЕ (подлёт)" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 4500 }
		],
		"s-780-3000-309-0": [
			{ type: "text", sub_type: "message", message: "Jump (Pushback)", message_RU: "Прыжок (откид)" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 2200 }
		]
	};
};