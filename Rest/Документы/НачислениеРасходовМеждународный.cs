﻿
using System;
using Rest;
using System.Globalization;
using System.Collections.Generic;
using ServiceStack.ServiceHost;
using ServiceStack.ServiceInterface;

namespace V82.Документы
{
	//NachislenieRaskhodovMezhdunarodnyjj
	[Маршрут("Документы/НачислениеРасходовМеждународный","")]
	public class НачислениеРасходовМеждународныйЗапрос: V82.ДокументыСсылка.НачислениеРасходовМеждународный,IReturn<НачислениеРасходовМеждународныйЗапрос>
	{
	}
	[Маршрут("Документы/НачислениеРасходовМеждународный/НайтиПоСсылке","{Ссылка}")]
	[Маршрут("Документы/НачислениеРасходовМеждународный/ПоСсылке","{Ссылка}")]
	public class НачислениеРасходовМеждународныйНайтиПоСсылке: V82.ДокументыСсылка.НачислениеРасходовМеждународный,IReturn<НачислениеРасходовМеждународныйНайтиПоСсылке>
	{
	}
	[Маршрут("Документы/НачислениеРасходовМеждународный/НайтиПоНомеру","{Номер}")]
	[Маршрут("Документы/НачислениеРасходовМеждународный/ПоНомеру","{Номер}")]
	public class НачислениеРасходовМеждународныйНайтиПоНомеру: V82.ДокументыСсылка.НачислениеРасходовМеждународный,IReturn<НачислениеРасходовМеждународныйНайтиПоНомеру>
	{
	}
	[Маршрут("Документы/НачислениеРасходовМеждународный/ВыбратьПоСсылке","{___Первые}")]
	[Маршрут("Документы/НачислениеРасходовМеждународный/ВыбратьПоСсылке","{___Первые}/{___Мин}")]
	[Маршрут("Документы/НачислениеРасходовМеждународный/ВыбратьПоСсылке","{___Первые}/{___Мин}/{___Макс}")]
	public class НачислениеРасходовМеждународныйВыбратьПоСсылке: V82.ДокументыСсылка.НачислениеРасходовМеждународный,IReturn<НачислениеРасходовМеждународныйВыбратьПоСсылке>
	{
		public int ___Первые {get; set;}
		public Guid ___Мин {get; set;}
		public Guid ___Макс {get; set;}
	}
	[Маршрут("Документы/НачислениеРасходовМеждународный/ВыбратьПоНомеру","{___Первые}")]
	[Маршрут("Документы/НачислениеРасходовМеждународный/ВыбратьПоНомеру","{___Первые}/{___Мин}")]
	[Маршрут("Документы/НачислениеРасходовМеждународный/ВыбратьПоНомеру","{___Первые}/{___Мин}/{___Макс}")]
	public class НачислениеРасходовМеждународныйВыбратьПоНомеру: V82.ДокументыСсылка.НачислениеРасходовМеждународный,IReturn<НачислениеРасходовМеждународныйВыбратьПоНомеру>
	{
		public int ___Первые {get; set;}
		public string ___Мин {get; set;}
		public string ___Макс {get; set;}
	}
	[Маршрут("Документы/НачислениеРасходовМеждународный/СтраницаПоСсылке","{___Размер}/{___Номер}")]
	public class НачислениеРасходовМеждународныйСтраницаПоСсылке: V82.ДокументыСсылка.НачислениеРасходовМеждународный,IReturn<НачислениеРасходовМеждународныйСтраницаПоСсылке>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}
	[Маршрут("Документы/НачислениеРасходовМеждународный/СтраницаПоНомеру","{___Размер}/{___Номер}")]
	public class НачислениеРасходовМеждународныйСтраницаПоНомеру: V82.ДокументыСсылка.НачислениеРасходовМеждународный,IReturn<НачислениеРасходовМеждународныйСтраницаПоНомеру>
	{
		public int ___Размер {get; set;}
		public int ___Номер {get; set;}
	}

	public class НачислениеРасходовМеждународныйОтвет
	{
		public string Ответ {get;set;}
	}

	public partial class НачислениеРасходовМеждународныйСервис : Service
	{
		
		public object Get(НачислениеРасходовМеждународныйЗапрос Запрос)
		{
			return null;
		}
		
		public object Get(НачислениеРасходовМеждународныйНайтиПоСсылке Запрос)
		{
			if (Запрос.Ссылка == null)
			{
				return null;
			}
			var Ссылка = V82.Документы.НачислениеРасходовМеждународный.НайтиПоСсылке(Запрос.Ссылка);
			if (Ссылка == null)
			{
				return new НачислениеРасходовМеждународныйОтвет() { Ответ = "НачислениеРасходовМеждународный c ссылкой '" + Запрос.Ссылка + "' не найден." };
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(НачислениеРасходовМеждународныйНайтиПоНомеру Запрос)
		{
			if(Запрос.Номер == null)
			{
				return null;
			}
			var СтрокаНомер = System.Uri.UnescapeDataString(Запрос.Номер);
			var Ссылка = V82.Документы.НачислениеРасходовМеждународный.НайтиПоНомеру(СтрокаНомер);
			if (Ссылка == null)
			{
				return new НачислениеРасходовМеждународныйОтвет() {Ответ = "НачислениеРасходовМеждународный c номером '" + Запрос.Номер + "' не найдено."};
			}
			return Ссылка.ПолучитьОбъект();
		}
		
		public object Get(НачислениеРасходовМеждународныйВыбратьПоСсылке Запрос)
		{
			if (Запрос.___Макс == Guid.Empty)
			{
				Запрос.___Макс = Guid.Parse("ffffffff-ffff-ffff-ffff-ffffffffffff");
			}
			var Коллекция = new List<object>();
			foreach (var Ссылка in V82.Документы.НачислениеРасходовМеждународный.ВыбратьПоСсылке(Запрос.___Первые, Запрос.___Мин, Запрос.___Макс))
			{
				Коллекция.Add(Ссылка.ПолучитьОбъект());
			}
			return Коллекция;
		}
		
		public object Get(НачислениеРасходовМеждународныйВыбратьПоНомеру Запрос)
		{
			return null;
		}
		
		public object Get(НачислениеРасходовМеждународныйСтраницаПоСсылке Запрос)
		{
			return null;
		}
		
		public object Get(НачислениеРасходовМеждународныйСтраницаПоНомеру Запрос)
		{
			return null;
		}

		public object Any(НачислениеРасходовМеждународныйЗапрос Запрос)
		{
			return new НачислениеРасходовМеждународныйОтвет {Ответ = "НачислениеРасходовМеждународный, "};
		}

		public object Post(НачислениеРасходовМеждународныйЗапрос ЗапросНачислениеРасходовМеждународный)
		{
			var Ссылка = (ДокументыСсылка.НачислениеРасходовМеждународный)ЗапросНачислениеРасходовМеждународный;
			var Объект = Ссылка.ПолучитьОбъект();
			Объект.Записать();
			return null;
		}


	}
}