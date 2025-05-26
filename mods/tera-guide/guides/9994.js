// Thaumetal Refinery (Hard)
//
// made by ITunk / Vampic

module.exports = (dispatch, handlers, guide, lang) => {
	const { entity } = dispatch.require.library;

	let blue_vaccine_loc = null;
	let red_vaccine_loc = null;
	let road_from_gameId = null;
	let temperature_boss = null;
	let have_buff = null;

	function spawn_road(loc) {
		const road_from_ent = entity.mobs[road_from_gameId];
		if (road_from_ent && loc) {
			const angle = (road_from_ent.pos.angleTo(loc) - road_from_ent.pos.w) * 180 / Math.PI;
			const distance = road_from_ent.pos.dist2D(loc);
			handlers.spawn({ func: "vector", args: [476, 0, 0, angle, distance, 0, 10000] }, { loc: road_from_ent.pos });
		}
	}

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 9941030) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "message", message: "Put banana to the tree", message_RU: "Положить банан к дереву" });
			}
		}
	});

	return {
		// 1 BOSS
		"nd-994-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-994-1000-103-0": [
			{ type: "text", sub_type: "message", message: "AOE Stun (Dodge)", message_RU: "АОЕ стан (эвейд)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 125, null, 250, 0, 2000] }
		],
		"s-994-1000-107-0": [
			{ type: "text", sub_type: "message", message: "Jump (Dodge)", message_RU: "Прыжок (эвейд)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, null, 250, 2500, 2500] }
		],
		"s-994-1000-108-1": [{ type: "text", sub_type: "message", message: "Stun Back", message_RU: "Стан назад" }],
		"s-994-1000-111-0": [
			{ type: "text", sub_type: "message", message: "Explosions (In)", message_RU: "Взрывы (к нему)", delay: 1000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 275, 1000, 4000] }
		],
		"s-994-1000-112-0": [
			{ type: "text", sub_type: "message", message: "Explosions (Out)", message_RU: "Взрывы (от него)", delay: 1000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 325, 1000, 4000] }
		],
		"s-994-1000-113-0": [
			{ type: "text", sub_type: "message", message: "Explosions (Middle)", message_RU: "Взрывы (между)", delay: 1000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 210, 1000, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 400, 1000, 4000] }
		],
		"s-994-1000-114-0": [{ type: "text", sub_type: "message", message: "Many Attacks | Pull", message_RU: "Серия ударов | Стяжка" }],
		"s-994-1000-115-0": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 1000 }],
		"s-994-1000-116-0": [{ type: "text", sub_type: "message", message: "Gather!", message_RU: "Собраться!", delay: 3000 }],
		"s-994-1000-119-0": [{ type: "text", sub_type: "message", message: "Pushback", message_RU: "Откид назад" }],
		"s-994-1000-312-0": [{ type: "text", sub_type: "message", message: "Shield!", message_RU: "Щит!", delay: 2000 }],
		"s-994-1000-315-0": [{ type: "text", sub_type: "message", message: "In", message_RU: "К нему" }],
		"ae-0-0-9941002": [{ type: "text", sub_type: "message", message: "Eye (boss to banana)", message_RU: "Глазик (подвести босса к банану)" }],
		"qb-994-1000-994008": [{ type: "text", sub_type: "message", message: "Push (Kaia)", message_RU: "Откид (кайа)" }],

		// 2 BOSS
		"nd-994-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-994-2000-111-0": [{ type: "text", sub_type: "message", message: "Bait (2 stones)", message_RU: "Байт (2 камня)" }],
		"s-994-2000-112-0": [{ type: "text", sub_type: "message", message: "Bait (3 stones)", message_RU: "Байт (3 камня)" }],
		"s-994-2000-106-0": [{ type: "text", sub_type: "message", message: "Bait (Rock)", message_RU: "Байт (глыба)" }],
		"s-994-2000-108-0": [{ type: "text", sub_type: "message", message: "Jump to Tank", message_RU: "Прыжок в танка" }],
		"s-994-2000-307-0": [{ type: "text", sub_type: "message", message: "Stones", message_RU: "Камни" }],
		"ae-0-0-9942006": [{ type: "text", sub_type: "message", message: "Stone on you", message_RU: "Камень на тебе", delay: 1000 }],
		"s-994-2000-117-0": [{ type: "text", sub_type: "message", message: "Inward Wave", message_RU: "Волна к нему", delay: 1000 }],
		"s-994-2000-118-0": [{ type: "text", sub_type: "message", message: "Outward Wave", message_RU: "Волна от него" }],
		"s-994-2000-114-0": [{ type: "text", sub_type: "message", message: "Together", message_RU: "Собраться" }],
		"s-994-2000-113-0": [
			{ type: "text", sub_type: "message", message: "Donut (In > Out)", message_RU: "Бублик (к нему > от него)", delay: 1500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 225, 1500, 2000] },
			{ type: "text", sub_type: "message", message: "Out / Dodge", message_RU: "От него / Эвейд", delay: 3500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 325, 3500, 3000] }
		],
		"s-994-2000-110-0": [{ type: "text", sub_type: "message", message: "Hit in dd", message_RU: "Удар в дд" }],

		// 3 BOSS
		"die": [{ type: "func", func: () => have_buff = null }],
		"ns-994-3000": [{ type: "func", func: () => temperature_boss = null }],
		"nd-994-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-994-3002": [{ type: "func", func: ent => road_from_gameId = ent.gameId }], // Колба с мобом
		"ns-994-3003": [{ type: "func", func: ent => road_from_gameId = ent.gameId, delay: 1000 }], // Эксперимент(моб)
		"nd-994-3003": [{ type: "func", func: () => road_from_gameId = null }],
		"ns-994-3004": [{ type: "func", func: ent => blue_vaccine_loc = ent.pos }], // Синий
		"ns-994-3005": [{ type: "func", func: ent => red_vaccine_loc = ent.pos }], // Красный
		"s-994-3000-103-0": [{ type: "text", sub_type: "message", message: "Pushback", message_RU: "Откид назад" }],
		"s-994-3000-107-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 5500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 5500] },
			{ type: "text", sub_type: "message", message: "Front (Dodge)", message_RU: "Удар вперед (эвейд)", check_func: () => !temperature_boss },
			{ type: "text", sub_type: "message", message: "Front | Back (Dodge)", message_RU: "Удар вперед | Удар назад (эвейд)", check_func: () => temperature_boss === "fire" },
			{ type: "text", sub_type: "message", message: "Front x2 (Dodge)", message_RU: "Удар вперед x2 (эвейд)", check_func: () => temperature_boss === "ice" }
		],
		"s-994-3000-108-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 5500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 5500] },
			{ type: "text", sub_type: "message", message: "Back (Dodge)", message_RU: "Удар назад (эвейд)", check_func: () => !temperature_boss },
			{ type: "text", sub_type: "message", message: "Back x2 (Dodge)", message_RU: "Удар назад x2 (эвейд)", check_func: () => temperature_boss === "fire" },
			{ type: "text", sub_type: "message", message: "Back | Front (Dodge)", message_RU: "Удар назад | Удар вперед (эвейд)", check_func: () => temperature_boss === "ice" }
		],
		"s-994-3000-104-0": [{ type: "text", sub_type: "message", message: "Bait", message_RU: "Байт" }],
		"s-994-3000-111-0": [
			{ type: "text", sub_type: "message", message: "Out Safe", message_RU: "Снаружи сейв", check_func: () => have_buff === "ice" || !have_buff }, // ice default
			{ type: "text", sub_type: "message", message: "In Safe", message_RU: "Внутри сейв", check_func: () => have_buff === "fire" }
		],
		"s-994-3000-112-0": [
			{ type: "text", sub_type: "message", message: "In Safe", message_RU: "Внутри сейв", check_func: () => have_buff === "fire" || !have_buff }, // fire default
			{ type: "text", sub_type: "message", message: "Out Safe", message_RU: "Снаружи сейв", check_func: () => have_buff === "ice" }
		],
		"s-994-3000-113-0": [
			{ type: "text", sub_type: "message", message: "Donut (In)", message_RU: "Бублик (к нему)", check_func: () => have_buff === "ice" || !have_buff }, // ice default
			{ type: "text", sub_type: "message", message: "Donut (Middle)", message_RU: "Бублик (между)", check_func: () => have_buff === "fire" }
		],
		"s-994-3000-114-0": [
			{ type: "text", sub_type: "message", message: "Donut (Middle)", message_RU: "Бублик (между)", check_func: () => have_buff === "fire" || !have_buff }, // fire default
			{ type: "text", sub_type: "message", message: "Donut (In)", message_RU: "Бублик (к нему)", check_func: () => have_buff === "ice" }
		],
		"s-994-3000-116-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 3000] },
			{ type: "text", sub_type: "message", message: "Front", message_RU: "Удар вперед", check_func: () => !temperature_boss }
		],
		"s-994-3000-118-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 3000] },
			{ type: "text", sub_type: "message", message: "Back", message_RU: "Удар назад", check_func: () => !temperature_boss }
		],
		"s-994-3000-122-0": [{ type: "text", sub_type: "message", message: "Gather!", message_RU: "Собраться!" }],
		"s-994-3000-125-0": [{ type: "text", sub_type: "message", message: "Bait (Puddle)", message_RU: "Байт (лужа)" }],
		"s-994-3000-126-0": "s-994-3000-111-0",
		"s-994-3000-127-0": "s-994-3000-112-0",
		"s-994-3000-128-0": "s-994-3000-113-0",
		"s-994-3000-129-0": "s-994-3000-114-0",
		"s-994-3000-130-0": "s-994-3000-116-0",
		"s-994-3000-301-0": [
			{ type: "text", sub_type: "message", message: "Line up the puddles to blue", message_RU: "Выстроить лужи к синему" },
			{ type: "func", func: () => spawn_road(blue_vaccine_loc) }
		],
		"s-994-3000-302-0": [
			{ type: "text", sub_type: "message", message: "Line up the puddles to red", message_RU: "Выстроить лужи к красному" },
			{ type: "func", func: () => spawn_road(red_vaccine_loc) }
		],
		"s-994-3000-315-0": [{ type: "text", sub_type: "message", message: "Pull", message_RU: "Стяжка" }],
		"s-994-3000-316-0": "s-994-3000-315-0",
		"am-994-3000-9943045": [{ type: "func", func: () => have_buff = "ice", delay: 1000 }],
		"am-994-3000-9943046": [{ type: "func", func: () => have_buff = "fire", delay: 1000 }],
		"ae-0-0-9943045": "am-994-3000-9943045",
		"ae-0-0-9943046": "am-994-3000-9943046",
		"ar-0-0-9943045": [{ type: "func", func: () => have_buff = null }],
		"ar-0-0-9943046": "ar-0-0-9943045",
		"ar-994-3000-9943045": "ar-0-0-9943045",
		"ar-994-3000-9943046": "ar-0-0-9943045",
		"qb-994-3000-994022": [{ type: "func", func: () => temperature_boss = "ice" }],
		"qb-994-3000-994024": [{ type: "func", func: () => temperature_boss = "fire" }],
		"qb-994-3000-994064": [{ type: "text", sub_type: "message", message: "Give stun!", message_RU: "Дать стан!" }],
		"qb-994-3000-994065": [{ type: "text", sub_type: "message", message: "Gather!", message_RU: "Собраться!" }]
	};
};