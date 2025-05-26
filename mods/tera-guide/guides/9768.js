// Shadow Sanguinary
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	let thirdboss_print_combo = true;
	let thirdboss_print_bait = true;
	let thirdboss_combo_count = 0;
	let thirdboss_combo_last_128 = null;
	let thirdboss_combo_last_129 = null;

	function secondboss_floor_event(one, two) {
		if (one && two) {
			handlers.event([
				{ type: "text", sub_type: "message", message: "Pizza", message_RU: "Пицца" },
				{ type: "spawn", func: "marker", args: [false, one * 45 - 22, 500, 0, 5000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, one * 45 - 45, 750, 0, 5000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, one * 45, 750, 0, 5000] },
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 330, 0, 7000] },
				{ type: "spawn", func: "marker", args: [false, two * 45 - 22, 300, 8000, 5000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, two * 45 - 45, 750, 8000, 5000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, two * 45, 750, 8000, 5000] }
			]);
		}
	}

	return {
		// 1 BOSS
		"nd-768-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-768-1000-102-0": [{ type: "text", sub_type: "message", message: "Turn Attack", message_RU: "Разворот" }],
		"s-768-1000-106-0": [{ type: "text", sub_type: "message", message: "Three Combo", message_RU: "Тройная комба" }],
		"s-768-1000-107-0": [{ type: "text", sub_type: "message", message: "Front Combo", message_RU: "Передняя комба" }],
		"s-768-1000-301-0": [{ type: "text", sub_type: "message", message: "Wave Front", message_RU: "Волна вперед" }],
		"s-768-1000-304-0": [{ type: "text", sub_type: "message", message: "Strike (Target)", message_RU: "Выстрел (таргет)" }],
		"s-768-1000-304-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 700 }],
		"s-768-1000-305-0": [{ type: "text", sub_type: "message", message: "8 explosions", message_RU: "Серия взрывов" }],
		"s-768-1000-306-0": [{ type: "text", sub_type: "message", message: "Stones", message_RU: "Пилоны" }], // 306 -> 307

		// 2 BOSS
		"nd-768-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-768-2000-101-0": [{ type: "text", sub_type: "message", message: "Fireball", message_RU: "Огненный шар" }],
		"s-768-2000-102-0": [{ type: "text", sub_type: "message", message: "Drain", message_RU: "Разряд" }],
		"s-768-2000-103-0": [{ type: "text", sub_type: "message", message: "Explosion", message_RU: "Взрыв" }],
		"s-768-2000-104-0": [{ type: "text", sub_type: "message", message: "Dark Frame", message_RU: "Удар вперед" }],
		"s-768-2000-110-0": [{ type: "text", sub_type: "message", message: "Front Attack", message_RU: "Передняя" }],
		"s-768-2000-111-0": [{ type: "text", sub_type: "message", message: "360", message_RU: "Крутилка" }], // 114 -> 111
		"s-768-2000-112-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_RU: "Задняя" }],
		"s-768-2000-117-0": [{ type: "text", sub_type: "message", message: "Laser (Target)", message_RU: "Лазер (таргет)" }],
		"s-768-2000-117-2": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 600 }],
		"s-768-2000-118-0": [{ type: "text", sub_type: "message", message: "Laser", message_RU: "Лазер" }],
		"s-768-2000-307-0": [{ type: "text", sub_type: "message", message: "Donut", message_RU: "Бублик" }],
		"s-768-2000-501-0": [{ type: "text", sub_type: "message", message: "Charging", message_RU: "Зарядка" }],
		"s-768-2000-301-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-768-2000-302-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-768-2000-303-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],
		"s-768-2000-304-0": [{ type: "func", func: secondboss_floor_event, args: [0, 0] }], // 1-4-2-3-5
		"s-768-2000-305-0": [{ type: "func", func: secondboss_floor_event, args: [0, 0] }], // 4-2-5-1-3
		"s-768-2000-306-0": [{ type: "func", func: secondboss_floor_event, args: [0, 0] }], // 5-1-4-3-2
		"s-768-2000-310-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-768-2000-311-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-768-2000-312-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],

		// 3 BOSS
		"nd-768-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		//
		"s-768-3000-101-0": [
			{ type: "event", check_func: () => thirdboss_print_combo, args: [
				{ type: "text", sub_type: "message", message: "Combo soon", message_RU: "Скоро комба" },
				{ type: "func", func: () => thirdboss_print_combo = false },
				{ type: "func", func: () => thirdboss_print_combo = true, delay: 12000 }
			] }
		],
		"s-768-3000-102-0": "s-768-3000-101-0",
		//
		"s-768-3000-128-0": [ // 128 -> 106/130
			{ type: "text", sub_type: "message", message: "Back/Left", message_RU: "Задний/Откид влево", check_func: () => thirdboss_combo_last_128 === null },
			{ type: "text", sub_type: "message", message: "Back", message_RU: "Задний", check_func: () => thirdboss_combo_last_128 === 130 },
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Откид влево", check_func: () => thirdboss_combo_last_128 === 106 }
		],
		"s-768-3000-129-0": [ // 129 -> 108/131
			{ type: "text", sub_type: "message", message: "Front/Right", message_RU: "Передний/Откид вправо", check_func: () => thirdboss_combo_last_129 === null },
			{ type: "text", sub_type: "message", message: "Front", message_RU: "Передний", check_func: () => thirdboss_combo_last_129 === 131 },
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Откид вправо", check_func: () => thirdboss_combo_last_129 === 108 }
		],
		"s-768-3000-130-0": [ // 128 -> 130
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Откид влево", check_func: () => thirdboss_combo_last_128 === null },
			{ type: "func", func: () => {
				thirdboss_combo_count++;
				thirdboss_combo_last_128 = 130;
			} }
		],
		"s-768-3000-105-0": [ // 130 -> 105
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-768-3000-106-0": [ // 128 -> 106
			{ type: "text", sub_type: "message", message: "Back", message_RU: "Задний", check_func: () => thirdboss_combo_last_128 === null },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 340, 12, 270, 0, 2600] },
			{ type: "func", func: () => {
				thirdboss_combo_count++;
				thirdboss_combo_last_128 = 106;
			} }
		],
		"s-768-3000-131-0": [ // 129 -> 131
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Откид вправо", check_func: () => thirdboss_combo_last_129 === null },
			{ type: "func", func: () => {
				thirdboss_combo_count++;
				thirdboss_combo_last_129 = 131;
			} }
		],
		"s-768-3000-107-0": [ // 131 -> 107
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-768-3000-108-0": [ // 129 -> 108
			{ type: "text", sub_type: "message", message: "Front", message_RU: "Передний", check_func: () => thirdboss_combo_last_129 === null },
			{ type: "func", func: () => {
				thirdboss_combo_count++;
				thirdboss_combo_last_129 = 108;
			} }
		],
		"s-768-3000-109-0": "s-768-3000-106-0",
		//
		"s-768-3000-110-0": [{ type: "text", sub_type: "message", message: "Back Move", message_RU: "Рывок назад" }],
		"s-768-3000-111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_RU: "Круговая" }],
		"s-768-3000-114-0": [{ type: "text", sub_type: "message", message: "Pull", message_RU: "Притяжка" }], // 114 -> 111
		"s-768-3000-115-0": [{ type: "text", sub_type: "message", message: "Circles", message_RU: "Круги" }], // 202/205 -> 115
		"s-768-3000-115-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 150 }],
		"s-768-3000-117-0": [{ type: "text", sub_type: "message", message: "Jump", message_RU: "Прыжок" }], // 503 -> 117
		"s-768-3000-134-0": [ // qb 468052 -> 134
			{ type: "text", sub_type: "message", message: "Inner + AoE", message_RU: "Ближний + АоЕ" },
			{ type: "text", sub_type: "message", message: "Get Debuff", message_RU: "Взять стак", class_position: "heal", delay: 2000 },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 75, 14, 175, 0, 1500] }
		],
		"s-768-3000-134-1": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 2000] }
		],
		"s-768-3000-136-0": [{ type: "text", sub_type: "message", message: "Donut", message_RU: "Бублик" }], // 135 -> 136
		"s-768-3000-202-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_RU: "Бросок цели" }], // 503 -> 201 -> 202
		"s-768-3000-205-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_RU: "Бросок цели" }], // 503 -> 117 -> 203 -> 204 -> 205
		"s-768-3000-206-0": [{ type: "text", sub_type: "message", message: "Pike (Target)", message_RU: "Копье (таргет)" }], // 206 -> 207
		"s-768-3000-302-0": [
			{ type: "text", sub_type: "message", message: "Bait (Target)", message_RU: "Байт (таргет)" },
			{ type: "func", func: () => {
				thirdboss_combo_count = 0;
				thirdboss_combo_last_128 = null;
				thirdboss_combo_last_129 = null;
			} }
		],
		"s-768-3000-302-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 1600 }],
		"s-768-3000-501-0": [
			{ type: "text", sub_type: "message", message: "Cage", message_RU: "Клетка" }
		],
		"s-768-3000-502-0": [
			{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 3000] }
		],
		"s-768-3000-503-0": [{ type: "text", sub_type: "message", message: "Target Lockon", message_RU: "Захват цели" }], // qb 468050 -> 503
		"s-768-3000-504-0": [{ type: "text", sub_type: "message", message: "Mobs Summon", message_RU: "Призыв мобов" }],
		// "s-768-3000-508-0": [{ type: "text", sub_type: "message", message: "Buff" }],
		"dm-0-0-9768013": [
			{ type: "text", sub_type: "notification", message: "Ready to Shield", message_RU: "Готовность ломать щит", speech: false },
			{ type: "text", sub_type: "alert", message: "Ready to Shield", message_RU: "Готовность ломать щит" }
		],
		//
		"give_bait": [
			{ type: "event", check_func: () => thirdboss_print_bait, args: [
				{ type: "text", sub_type: "message", message: "Give Bait", message_RU: "Дать байт", class_position: "heal" },
				{ type: "func", func: () => thirdboss_print_bait = false },
				{ type: "func", func: () => thirdboss_print_bait = true, delay: 6000 }
			] }
		],
		"give_bait_combo": [
			{ type: "event", check_func: () => thirdboss_combo_count >= 3, args: [
				{ type: "text", sub_type: "message", message: "Give Bait", message_RU: "Дать байт", class_position: "heal" },
				{ type: "func", func: () => {
					thirdboss_combo_count = 0;
					thirdboss_combo_last_128 = null;
					thirdboss_combo_last_129 = null;
				} }
			] }
		],
		"e-768-3000-101": "give_bait",
		"e-768-3000-102": "give_bait",
		"e-768-3000-105": "give_bait_combo", // left
		"e-768-3000-106": "give_bait_combo", // back
		"e-768-3000-107": "give_bait_combo", // right
		"e-768-3000-108": "give_bait_combo", // front
		"e-768-3000-111": "give_bait", // 360 attack
		"e-768-3000-114": "give_bait", // pull
		"e-768-3000-115": "give_bait", // circles
		"e-768-3000-117": "give_bait", // jump
		"e-768-3000-202": "give_bait", // target throw
		"e-768-3000-205": "give_bait", // target throw
		"e-768-3000-207": "give_bait", // pike
		"s-768-3000-122-2": "give_bait", // core pattern 1
		"s-768-3000-123-2": "give_bait", // core pattern 2
		"s-768-3000-124-2": "give_bait", // core pattern 3
		"s-768-3000-127-2": "give_bait", // core pattern 4
		"e-768-3000-136": "give_bait", // donut
		"s-768-3000-506-1": "give_bait" // dissipation
	};
};