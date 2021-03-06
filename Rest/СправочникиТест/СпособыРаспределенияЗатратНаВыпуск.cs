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
	public class СпособыРаспределенияЗатратНаВыпуск:V82.Rest.СправочникиТест.СправочникТест
	{
		public static СпособыРаспределенияЗатратНаВыпускЗапрос НайтиПоУникальномуИдентификатору(Guid УникальныйИдентификатор)//ПолучитьПоСсылке,Взять
		{
			var Урл = "http://localhost:1337/Справочники/СпособыРаспределенияЗатратНаВыпуск/НайтиПоСсылке/"+УникальныйИдентификатор+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СпособыРаспределенияЗатратНаВыпускЗапрос СпособыРаспределенияЗатратНаВыпускЗапрос = null;
			try
			{
				СпособыРаспределенияЗатратНаВыпускЗапрос = Клиент.Get(new СпособыРаспределенияЗатратНаВыпускЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СпособыРаспределенияЗатратНаВыпускЗапрос;
		}
		public static СпособыРаспределенияЗатратНаВыпускЗапрос НайтиПоКоду(string Код)
		{
			var Урл = "http://localhost:1337/Справочники/СпособыРаспределенияЗатратНаВыпуск/НайтиПоКоду/"+Код+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СпособыРаспределенияЗатратНаВыпускЗапрос СпособыРаспределенияЗатратНаВыпускЗапрос = null;
			try
			{
				СпособыРаспределенияЗатратНаВыпускЗапрос = Клиент.Get(new СпособыРаспределенияЗатратНаВыпускЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СпособыРаспределенияЗатратНаВыпускЗапрос;
		}
		public static СпособыРаспределенияЗатратНаВыпускЗапрос НайтиПоНаименованию(string Наименование)//ПолучитьПоНаименованию,Взять
		{
			var Урл = "http://localhost:1337/Справочники/СпособыРаспределенияЗатратНаВыпуск/НайтиПоНаименованию/"+Наименование+"?format=json";
			var Клиент = new JsonServiceClient(Урл);
			СпособыРаспределенияЗатратНаВыпускЗапрос СпособыРаспределенияЗатратНаВыпускЗапрос = null;
			try
			{
				СпособыРаспределенияЗатратНаВыпускЗапрос = Клиент.Get(new СпособыРаспределенияЗатратНаВыпускЗапрос());
			}
			catch (Exception)
			{
				return null;
			}
			return СпособыРаспределенияЗатратНаВыпускЗапрос;
		}
		public static void ЗаписатьНовый(СпособыРаспределенияЗатратНаВыпускЗапрос СпособыРаспределенияЗатратНаВыпускЗапрос)//Положить
		{
			var Урл = "http://localhost:1337/Справочники/СпособыРаспределенияЗатратНаВыпуск?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СпособыРаспределенияЗатратНаВыпускОтвет = Клиент.Post(СпособыРаспределенияЗатратНаВыпускЗапрос);
		}
		public static void Записать(СпособыРаспределенияЗатратНаВыпускЗапрос СпособыРаспределенияЗатратНаВыпускЗапрос)//Обновить
		{
			var Урл = "http://localhost:1337/Справочники/СпособыРаспределенияЗатратНаВыпуск?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СпособыРаспределенияЗатратНаВыпускОтвет = Клиент.Put(СпособыРаспределенияЗатратНаВыпускЗапрос);
		}
		public static void Удалить(СпособыРаспределенияЗатратНаВыпускЗапрос СпособыРаспределенияЗатратНаВыпускЗапрос)//
		{
			var Урл = "http://localhost:1337/Справочники/СпособыРаспределенияЗатратНаВыпуск?format=json";
			var Клиент = new JsonServiceClient(Урл);
			var СпособыРаспределенияЗатратНаВыпускОтвет = Клиент.Delete(СпособыРаспределенияЗатратНаВыпускЗапрос);
		}
	}
}