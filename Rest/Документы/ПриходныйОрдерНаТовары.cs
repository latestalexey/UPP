﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Документы
{
	//PrikhodnyjjOrderNaTovary
	[Маршрут("Документы/ПриходныйОрдерНаТовары","")]
	public class ПриходныйОрдерНаТоварыЗапрос: V82.ДокументыСсылка.ПриходныйОрдерНаТовары,IReturn<ПриходныйОрдерНаТоварыЗапрос>
	{
	}
	[Маршрут("Документы/ПриходныйОрдерНаТовары/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Документы/ПриходныйОрдерНаТовары/ПоСсылке","{Ссылка}")]
	public class ПриходныйОрдерНаТоварыНайтиПоСсылке: V82.ДокументыСсылка.ПриходныйОрдерНаТовары,IReturn<ПриходныйОрдерНаТоварыНайтиПоСсылке>
	{
	}
	[Маршрут("Документы/ПриходныйОрдерНаТовары/НайтиПоНомеру","{Номер}")]
	[Маршрут("Документы/ПриходныйОрдерНаТовары/ПоНомеру","{Номер}")]
	public class ПриходныйОрдерНаТоварыНайтиПоНомеру: V82.ДокументыСсылка.ПриходныйОрдерНаТовары,IReturn<ПриходныйОрдерНаТоварыНайтиПоНомеру>
	{
	}
	[Маршрут("Документы/ПриходныйОрдерНаТовары/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Документы/ПриходныйОрдерНаТовары/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ПриходныйОрдерНаТовары/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class ПриходныйОрдерНаТоварыВыбратьПоСсылке: V82.ДокументыСсылка.ПриходныйОрдерНаТовары,IReturn<ПриходныйОрдерНаТоварыВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Документы/ПриходныйОрдерНаТовары/ВыбратьПоНомеру","{___Первые}")]
	[Маршрут("Документы/ПриходныйОрдерНаТовары/ВыбратьПоНомеру","{___Первые}/{___Мин}")]
	[Маршрут("Документы/ПриходныйОрдерНаТовары/ВыбратьПоНомеру","{___Первые}/{___Мин}/{___Макс}")]
	public class ПриходныйОрдерНаТоварыВыбратьПоНомеру: V82.ДокументыСсылка.ПриходныйОрдерНаТовары,IReturn<ПриходныйОрдерНаТоварыВыбратьПоНомеру>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Документы/ПриходныйОрдерНаТовары/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class ПриходныйОрдерНаТоварыСтраницаПоСсылке: V82.ДокументыСсылка.ПриходныйОрдерНаТовары,IReturn<ПриходныйОрдерНаТоварыСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Документы/ПриходныйОрдерНаТовары/СтраницаПоНомеру","{___Размер}/{___Номер}")]
	public class ПриходныйОрдерНаТоварыСтраницаПоНомеру: V82.ДокументыСсылка.ПриходныйОрдерНаТовары,IReturn<ПриходныйОрдерНаТоварыСтраницаПоНомеру>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class ПриходныйОрдерНаТоварыОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class ПриходныйОрдерНаТоварыСервис : Service
	{
		
		public object Get(ПриходныйОрдерНаТоварыЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(ПриходныйОрдерНаТоварыНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Документы.ПриходныйОрдерНаТовары.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new ПриходныйОрдерНаТоварыОтвет() { Ответ = "ПриходныйОрдерНаТовары c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ПриходныйОрдерНаТоварыНайтиПоНомеру Запрос)
		{
			if(Запрос.Номер == null)
			{
				return null;
			}
			var СтрокаНомер = System.Uri.UnescapeDataString(Запрос.Номер);
			var Ссылка = V82.Документы.ПриходныйОрдерНаТовары.НайтиПоНомеру(СтрокаНомер);
			if (Ссылка == null)
			{
				return new ПриходныйОрдерНаТоварыОтвет() {Ответ = "ПриходныйОрдерНаТовары c номером '" + Запрос.Номер + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(ПриходныйОрдерНаТоварыВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Документы.ПриходныйОрдерНаТовары.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(ПриходныйОрдерНаТоварыВыбратьПоНомеру Запрос)
		{
			return null;
		}
		
		public object Get(ПриходныйОрдерНаТоварыСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(ПриходныйОрдерНаТоварыСтраницаПоНомеру Запрос)
		{
			return null;
		}

		public object Any(ПриходныйОрдерНаТоварыЗапрос Запрос)
		{
			return new ПриходныйОрдерНаТоварыОтвет {Ответ = "ПриходныйОрдерНаТовары, "};
		}

		public object Post(ПриходныйОрдерНаТоварыЗапрос ЗапросПриходныйОрдерНаТовары)
		{
			var Ссылка = (ДокументыСсылка.ПриходныйОрдерНаТовары)ЗапросПриходныйОрдерНаТовары;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}