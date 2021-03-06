﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Документы
{
	//PlatezhnyjjOrderPostuplenieDenezhnykhSredstv
	[Маршрут("Документы/ПлатежныйОрдерПоступлениеДенежныхСредств","")]
	public class ПлатежныйОрдерПоступлениеДенежныхСредствЗапрос: V82.ДокументыСсылка.ПлатежныйОрдерПоступлениеДенежныхСредств,IReturn<ПлатежныйОрдерПоступлениеДенежныхСредствЗапрос>
	{
	}
	[Маршрут("Документы/ПлатежныйОрдерПоступлениеДенежныхСредств/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Документы/ПлатежныйОрдерПоступлениеДенежныхСредств/ПоСсылке","{Ссылка}")]
	public class ПлатежныйОрдерПоступлениеДенежныхСредствНайтиПоСсылке: V82.ДокументыСсылка.ПлатежныйОрдерПоступлениеДенежныхСредств,IReturn<ПлатежныйОрдерПоступлениеДенежныхСредствНайтиПоСсылке>
	{
	}
	[Маршрут("Документы/ПлатежныйОрдерПоступлениеДенежныхСредств/НайтиПоНомеру","{Номер}")]
	[Маршрут("Документы/ПлатежныйОрдерПоступлениеДенежныхСредств/ПоНомеру","{Номер}")]
	public class ПлатежныйОрдерПоступлениеДенежныхСредствНайтиПоНомеру: V82.ДокументыСсылка.ПлатежныйОрдерПоступлениеДенежныхСредств,IReturn<ПлатежныйОрдерПоступлениеДенежныхСредствНайтиПоНомеру>
	{
	}
	[Маршрут("Документы/ПлатежныйОрдерПоступлениеДенежныхСредств/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Документы/ПлатежныйОрдерПоступлениеДенежныхСредств/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ПлатежныйОрдерПоступлениеДенежныхСредств/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class ПлатежныйОрдерПоступлениеДенежныхСредствВыбратьПоСсылке: V82.ДокументыСсылка.ПлатежныйОрдерПоступлениеДенежныхСредств,IReturn<ПлатежныйОрдерПоступлениеДенежныхСредствВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Документы/ПлатежныйОрдерПоступлениеДенежныхСредств/ВыбратьПоНомеру","{___Первые}")]
	[Маршрут("Документы/ПлатежныйОрдерПоступлениеДенежныхСредств/ВыбратьПоНомеру","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ПлатежныйОрдерПоступлениеДенежныхСредств/ВыбратьПоНомеру","{___Первые}/{___Мин}/{___Макс}")]
	public class ПлатежныйОрдерПоступлениеДенежныхСредствВыбратьПоНомеру: V82.ДокументыСсылка.ПлатежныйОрдерПоступлениеДенежныхСредств,IReturn<ПлатежныйОрдерПоступлениеДенежныхСредствВыбратьПоНомеру>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Документы/ПлатежныйОрдерПоступлениеДенежныхСредств/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class ПлатежныйОрдерПоступлениеДенежныхСредствСтраницаПоСсылке: V82.ДокументыСсылка.ПлатежныйОрдерПоступлениеДенежныхСредств,IReturn<ПлатежныйОрдерПоступлениеДенежныхСредствСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Документы/ПлатежныйОрдерПоступлениеДенежныхСредств/СтраницаПоНомеру","{___Размер}/{___Номер}")]
	public class ПлатежныйОрдерПоступлениеДенежныхСредствСтраницаПоНомеру: V82.ДокументыСсылка.ПлатежныйОрдерПоступлениеДенежныхСредств,IReturn<ПлатежныйОрдерПоступлениеДенежныхСредствСтраницаПоНомеру>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class ПлатежныйОрдерПоступлениеДенежныхСредствОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class ПлатежныйОрдерПоступлениеДенежныхСредствСервис : Service
	{
		
		public object Get(ПлатежныйОрдерПоступлениеДенежныхСредствЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(ПлатежныйОрдерПоступлениеДенежныхСредствНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Документы.ПлатежныйОрдерПоступлениеДенежныхСредств.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new ПлатежныйОрдерПоступлениеДенежныхСредствОтвет() { Ответ = "ПлатежныйОрдерПоступлениеДенежныхСредств c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ПлатежныйОрдерПоступлениеДенежныхСредствНайтиПоНомеру Запрос)
		{
			if(Запрос.Номер == null)
			{
				return null;
			}
			var СтрокаНомер = System.Uri.UnescapeDataString(Запрос.Номер);
			var Ссылка = V82.Документы.ПлатежныйОрдерПоступлениеДенежныхСредств.НайтиПоНомеру(СтрокаНомер);
			if (Ссылка == null)
			{
				return new ПлатежныйОрдерПоступлениеДенежныхСредствОтвет() {Ответ = "ПлатежныйОрдерПоступлениеДенежныхСредств c номером '" + Запрос.Номер + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ПлатежныйОрдерПоступлениеДенежныхСредствВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Документы.ПлатежныйОрдерПоступлениеДенежныхСредств.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(ПлатежныйОрдерПоступлениеДенежныхСредствВыбратьПоНомеру Запрос)
		{
			return null;
		}
		
		public object Get(ПлатежныйОрдерПоступлениеДенежныхСредствСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(ПлатежныйОрдерПоступлениеДенежныхСредствСтраницаПоНомеру Запрос)
		{
			return null;
		}

		public object Any(ПлатежныйОрдерПоступлениеДенежныхСредствЗапрос Запрос)
		{
			return new ПлатежныйОрдерПоступлениеДенежныхСредствОтвет {Ответ = "ПлатежныйОрдерПоступлениеДенежныхСредств, "};
		}

		public object Post(ПлатежныйОрдерПоступлениеДенежныхСредствЗапрос ЗапросПлатежныйОрдерПоступлениеДенежныхСредств)
		{
			var Ссылка = (ДокументыСсылка.ПлатежныйОрдерПоступлениеДенежныхСредств)ЗапросПлатежныйОрдерПоступлениеДенежныхСредств;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}