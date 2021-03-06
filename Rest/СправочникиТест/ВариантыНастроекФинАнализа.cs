﻿
using System;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceClient.Web;
using V82.Справочники;

namespace V82.Rest.СправочникиТест
{
	public class ВариантыНастроекФинАнализа:V82.Rest.СправочникиТест.СправочникТест
	{
		public static ВариантыНастроекФинАнализаЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ВариантыНастроекФинАнализа/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВариантыНастроекФинАнализаЗапрос ВариантыНастроекФинАнализаЗапрос = null;
			try
			{
				ВариантыНастроекФинАнализаЗапрос = Клиент.Get(new ВариантыНастроекФинАнализаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВариантыНастроекФинАнализаЗапрос;
		}
		public static ВариантыНастроекФинАнализаЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/ВариантыНастроекФинАнализа/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВариантыНастроекФинАнализаЗапрос ВариантыНастроекФинАнализаЗапрос = null;
			try
			{
				ВариантыНастроекФинАнализаЗапрос = Клиент.Get(new ВариантыНастроекФинАнализаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВариантыНастроекФинАнализаЗапрос;
		}
		public static ВариантыНастроекФинАнализаЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/ВариантыНастроекФинАнализа/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			ВариантыНастроекФинАнализаЗапрос ВариантыНастроекФинАнализаЗапрос = null;
			try
			{
				ВариантыНастроекФинАнализаЗапрос = Клиент.Get(new ВариантыНастроекФинАнализаЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return ВариантыНастроекФинАнализаЗапрос;
		}
		public static void ЗаписатьНовый(ВариантыНастроекФинАнализаЗапрос ВариантыНастроекФинАнализаЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/ВариантыНастроекФинАнализа?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВариантыНастроекФинАнализаОтвет = Клиент.Post(ВариантыНастроекФинАнализаЗапрос);
		}
		public static void Записать(ВариантыНастроекФинАнализаЗапрос ВариантыНастроекФинАнализаЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/ВариантыНастроекФинАнализа?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВариантыНастроекФинАнализаОтвет = Клиент.Put(ВариантыНастроекФинАнализаЗапрос);
		}
		public static void Удалить(ВариантыНастроекФинАнализаЗапрос ВариантыНастроекФинАнализаЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/ВариантыНастроекФинАнализа?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var ВариантыНастроекФинАнализаОтвет = Клиент.Delete(ВариантыНастроекФинАнализаЗапрос);
		}
	}
}