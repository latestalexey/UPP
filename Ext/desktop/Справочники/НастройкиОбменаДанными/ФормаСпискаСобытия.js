﻿Ext.define('Справочники.НастройкиОбменаДанными.ФормаСпискаСобытия',
{
	ПередатьСсылку: function (строкаЗначений)
	{
		var ссылка = строкаЗначений.Ссылка;
		var хранилище = Ext.create('Ext.data.Store',
		{
			autoLoad: true,
			fields: ['Код','Наименование','УзелИнформационнойБазы','ТипНастройки','ТипНастройки.Ссылка','ТипНастройки.Представление','ПроизводитьПриемСообщений','ПроизводитьОтправкуСообщений','КоличествоЭлементовВТранзакцииНаВыгрузкуДанных','КоличествоЭлементовВТранзакцииНаЗагрузкуДанных','ВыполнятьАрхивациюФайловОбмена','ПарольНаОтправку','ПарольНаПрием','КаталогОбменаИнформацией','FTPАдресОбмена','ПортFTPСоединения','ПользовательFTPСоединения','ПарольFTPСоединения','Комментарий','МаксимальныйРазмерОтправляемогоПолучаемогоПакетаЧерезFTP','ПассивноеFTPСоединение','ПочтовыйАдресПолучателя','УчетнаяЗаписьПриемаОтправкиСообщений','УчетнаяЗаписьПриемаОтправкиСообщений.Ссылка','УчетнаяЗаписьПриемаОтправкиСообщений.Представление','АвтоматическиЗакачиватьПочтуПриОбмене','МаксимальныйРазмерОтправляемогоПакетаЧерезПочту','УзелФоновогоОбмена','ПравилаОбмена','ПравилаОбменаДляПриемника','ДобавлениеОбъектовИзФоновогоОбмена','КоличествоОбъектовДляФоновогоОбмена','OnLineОбмен','ТипИнформационнойБазыДляПодключения','КаталогИнформационнойБазыДляПодключения','ИмяСервераИнформационнойБазыДляПодключения','ИмяИнформационнойБазыНаСервереДляПодключения','АутентификацияWindowsИнформационнойБазыДляПодключения','ПользовательИнформационнойБазыДляПодключения','ПарольИнформационнойБазыДляПодключения','ВерсияПлатформыИнформационнойБазыДляПодключения','РежимОтладкиOnLineОбмена','ИмяФайлаПротоколаОбменаOnLineОбмен','ТипУзлаИнформационнойБазы','УчетнаяЗаписьОтправкиСообщенияОбОшибке','УчетнаяЗаписьОтправкиСообщенияОбОшибке.Ссылка','УчетнаяЗаписьОтправкиСообщенияОбОшибке.Представление','АдресДляОтправкиСообщенийОбОшибке','ПослеОшибкиОтложенногоПроведенияПрекратитьОперации','КоличествоОшибокОтложенногоПроведенияДляПрекращенияОперации','ВыполнятьДействияПодПолнымиПравами','ПроизводитьОтправкуТолькоПриУспешномПриеме','ВыполнитьОтложенноеПроведениеДокументовПоРасписанию','ПользовательПроксиFTP','ПарольПроксиFTP','СерверПроксиFTP','ПортПроксиFTP','ПротоколПроксиFTP',],
			proxy: new Ext.data.ScriptTagProxy({ url: 'https://as-msk-n7077:1337/Справочники/НастройкиОбменаДанными/НайтиПоСсылке/' + ссылка, timeout:200}),
		});
		хранилище.load(
		{
			callback: function (records, operation, success)
			{
				Ext.require(['Справочники.НастройкиОбменаДанными.ФормаЭлемента'], function ()
				{
					var количество = хранилище.getCount();
					if (количество == 0)
					{
						var массивЗначений = строкаЗначений;
					}
					else
					{
						var массивЗначений = хранилище.data.items[0].data;
					};
					var окно = Ext.create('Справочники.НастройкиОбменаДанными.ФормаЭлемента',
					{
						Хранилище: массивЗначений.Родитель,
					});
					var форма = окно.down('form');
					форма.getForm().setValues(массивЗначений);
					if (окно)
					{
						окно.show();
						return окно;
					}
				});
			},
			scope: this
		});
	}
});