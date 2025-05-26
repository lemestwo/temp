"use strict";

// Available strings for additional languages
// If no language is found, the default language (English) will be displayed
module.exports.general = {

	// Русский
	ru: {
		unknowncommand: "Невереная команда, введите guide help",
		helpheader: "Введите \"guide help\" для вывода справки",
		helpbody: [
			["guide, вкл./выкл. модуля", "PRMSG"],
			["guide gui, показать графический интерфейс", "PRMSG"],
			["guide voice, вкл./выкл. голосовые сообщения", "PRMSG"],
			["guide lNotice, вкл./выкл. отправки уведомлений в чата вместо экранных", "PRMSG"],
			["guide gNotice, вкл./выкл. отправки сообщений в чат группы", "PRMSG"],
			["guide auto~en~ru, выбор языка перевода", "PRMSG"],
			["guide male~female, выбор пола диктора голосовых сообщений (если доступно)", "PRMSG"],
			["guide 1~10, регулировка скорости чтения голосовых сообщений", "PRMSG"],
			["guide spawnObject, вкл./выкл. спауна маркировочных объектов", "PRMSG"],
			["guide stream, вкл./выкл. режима стрима (скрытие сообщений и объектов)", "PRMSG"],
			["guide dungeons, список всех поддерживаемых данжей и их id", "PRMSG"],
			["guide verbose id, вкл./выкл. всех сообщений для данжа, где id - идентификатор данжа", "PRMSG"],
			["guide spawnObject id, вкл./выкл. спауна объектов для данжа, где id - идентификатор данжа", "PRMSG"],
			["guide cr, установить цвет сообщения: красный", "CRMSG"],
			["guide co, установить цвет сообщения: оранжевый", "COMSG"],
			["guide cy, установить цвет сообщения: желтый", "CYMSG"],
			["guide cg, установить цвет сообщения: зеленый", "CGMSG"],
			["guide cdb, установить цвет сообщения: темно-синий", "CDBMSG"],
			["guide cb, установить цвет сообщения: синий", "CBMSG"],
			["guide cv, установить цвет сообщения: фиолетовый", "CVMSG"],
			["guide cp, установить цвет сообщения: розовый", "CPMSG"],
			["guide clp, установить цвет сообщения: светло-розовый", "CLPMSG"],
			["guide clb, установить цвет сообщения: светло-синий", "CLBMSG"],
			["guide cbl, установить цвет сообщения: черный", "CBLMSG"],
			["guide cgr, установить цвет сообщения: серый", "CGRMSG"],
			["guide cw, установить цвет сообщения: белый", "CWMSG"]
		],
		red: "Красный",
		green: "Зеленый",
		settings: "Настройки",
		spawnObject: "Спаун маркировочных объектов",
		speaks: "Голосовые сообщения",
		lNotice: "Уведомления в чат вместо экранных",
		gNotice: "Сообщения в канал чата группы",
		stream: "Режим стримера (скрытие сообщений и объектов)",
		language: "Выбор языка",
		voice: "Голос (пол)",
		rate: "Скорость речи",
		color: "Выбор цвета",
		dungeons: "Настройки данжей",
		verbose: "Сообщения",
		objects: "Объекты",
		test: "Проверка",
		module: "Модуль TERA-Guide",
		enabled: "Вкл.",
		disabled: "Выкл.",
		male: "Мужской",
		female: "Женский",
		voicetest: "[Проверка скорости чтения сообщений]",
		colorchanged: "Цвет текста сообщений изменен",
		dgnotfound: "Данж с таким id не найден.",
		dgnotspecified: "Не указан id данжа.",
		enterdg: "Вы вошли в данж",
		fordungeon: "для данжа"
	}
};