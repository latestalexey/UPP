﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Документы
{
	//VozvratMaterialovIzEHkspluatacii
	[Маршрут("Документы/ВозвратМатериаловИзЭксплуатации","")]
	public class ВозвратМатериаловИзЭксплуатацииЗапрос: V82.ДокументыСсылка.ВозвратМатериаловИзЭксплуатации,IReturn<ВозвратМатериаловИзЭксплуатацииЗапрос>
	{
	}
	[Маршрут("Документы/ВозвратМатериаловИзЭксплуатации/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Документы/ВозвратМатериаловИзЭксплуатации/ПоСсылке","{Ссылка}")]
	public class ВозвратМатериаловИзЭксплуатацииНайтиПоСсылке: V82.ДокументыСсылка.ВозвратМатериаловИзЭксплуатации,IReturn<ВозвратМатериаловИзЭксплуатацииНайтиПоСсылке>
	{
	}
	[Маршрут("Документы/ВозвратМатериаловИзЭксплуатации/НайтиПоНомеру","{Номер}")]
	[Маршрут("Документы/ВозвратМатериаловИзЭксплуатации/ПоНомеру","{Номер}")]
	public class ВозвратМатериаловИзЭксплуатацииНайтиПоНомеру: V82.ДокументыСсылка.ВозвратМатериаловИзЭксплуатации,IReturn<ВозвратМатериаловИзЭксплуатацииНайтиПоНомеру>
	{
	}
	[Маршрут("Документы/ВозвратМатериаловИзЭксплуатации/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Документы/ВозвратМатериаловИзЭксплуатации/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ВозвратМатериаловИзЭксплуатации/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class ВозвратМатериаловИзЭксплуатацииВыбратьПоСсылке: V82.ДокументыСсылка.ВозвратМатериаловИзЭксплуатации,IReturn<ВозвратМатериаловИзЭксплуатацииВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Документы/ВозвратМатериаловИзЭксплуатации/ВыбратьПоНомеру","{___Первые}")]
	[Маршрут("Документы/ВозвратМатериаловИзЭксплуатации/ВыбратьПоНомеру","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ВозвратМатериаловИзЭксплуатации/ВыбратьПоНомеру","{___Первые}/{___Мин}/{___Макс}")]
	public class ВозвратМатериаловИзЭксплуатацииВыбратьПоНомеру: V82.ДокументыСсылка.ВозвратМатериаловИзЭксплуатации,IReturn<ВозвратМатериаловИзЭксплуатацииВыбратьПоНомеру>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Документы/ВозвратМатериаловИзЭксплуатации/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class ВозвратМатериаловИзЭксплуатацииСтраницаПоСсылке: V82.ДокументыСсылка.ВозвратМатериаловИзЭксплуатации,IReturn<ВозвратМатериаловИзЭксплуатацииСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Документы/ВозвратМатериаловИзЭксплуатации/СтраницаПоНомеру","{___Размер}/{___Номер}")]
	public class ВозвратМатериаловИзЭксплуатацииСтраницаПоНомеру: V82.ДокументыСсылка.ВозвратМатериаловИзЭксплуатации,IReturn<ВозвратМатериаловИзЭксплуатацииСтраницаПоНомеру>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class ВозвратМатериаловИзЭксплуатацииОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class ВозвратМатериаловИзЭксплуатацииСервис : Service
	{
		
		public object Get(ВозвратМатериаловИзЭксплуатацииЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(ВозвратМатериаловИзЭксплуатацииНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Документы.ВозвратМатериаловИзЭксплуатации.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new ВозвратМатериаловИзЭксплуатацииОтвет() { Ответ = "ВозвратМатериаловИзЭксплуатации c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ВозвратМатериаловИзЭксплуатацииНайтиПоНомеру Запрос)
		{
			if(Запрос.Номер == null)
			{
				return null;
			}
			var СтрокаНомер = System.Uri.UnescapeDataString(Запрос.Номер);
			var Ссылка = V82.Документы.ВозвратМатериаловИзЭксплуатации.НайтиПоНомеру(СтрокаНомер);
			if (Ссылка == null)
			{
				return new ВозвратМатериаловИзЭксплуатацииОтвет() {Ответ = "ВозвратМатериаловИзЭксплуатации c номером '" + Запрос.Номер + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ВозвратМатериаловИзЭксплуатацииВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Документы.ВозвратМатериаловИзЭксплуатации.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(ВозвратМатериаловИзЭксплуатацииВыбратьПоНомеру Запрос)
		{
			return null;
		}
		
		public object Get(ВозвратМатериаловИзЭксплуатацииСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(ВозвратМатериаловИзЭксплуатацииСтраницаПоНомеру Запрос)
		{
			return null;
		}

		public object Any(ВозвратМатериаловИзЭксплуатацииЗапрос Запрос)
		{
			return new ВозвратМатериаловИзЭксплуатацииОтвет {Ответ = "ВозвратМатериаловИзЭксплуатации, "};
		}

		public object Post(ВозвратМатериаловИзЭксплуатацииЗапрос ЗапросВозвратМатериаловИзЭксплуатации)
		{
			var Ссылка = (ДокументыСсылка.ВозвратМатериаловИзЭксплуатации)ЗапросВозвратМатериаловИзЭксплуатации;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}