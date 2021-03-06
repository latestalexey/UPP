﻿
using System;
using System.Data.SqlClient;
using V82;
using V82.ДокументыСсылка;
using V82.Документы;//Менеджер;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.Документы//Менеджер
{
	///<summary>
	///(Общ)
	///</summary>
	public partial class РаспределениеМатериаловНаВыпуск:ДокументМенеджер
	{
		
		public static ДокументыСсылка.РаспределениеМатериаловНаВыпуск НайтиПоСсылке(Guid _Ссылка)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Fld10291 [ДатаНачалаПериода]
					,_Fld18833 [ДатаОкончанияПериода]
					,_Fld10292_TYPE [Заказ_Тип],_Fld10292_RRRef [Заказ],_Fld10292_RTRef [Заказ_Вид]
					,_Fld10293 [Комментарий]
					,_Fld10294RRef [НоменклатурнаяГруппа]
					,_Fld10295RRef [Организация]
					,_Fld10296RRef [Ответственный]
					,_Fld10297 [ОтражатьВБухгалтерскомУчете]
					,_Fld10298 [ОтражатьВНалоговомУчете]
					,_Fld10299 [ОтражатьВУправленческомУчете]
					,_Fld10300RRef [Подразделение]
					,_Fld10301RRef [ПодразделениеОрганизации]
					,_Fld10302RRef [ДокИнвентаризация]
					,_Fld18632 [ИспользоватьПодразделенияНЗП]
					,_Fld19069 [ИспользоватьНаработку]
					From _Document417(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.РаспределениеМатериаловНаВыпуск();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаНачалаПериода = Читалка.GetDateTime(3);
							Ссылка.ДатаОкончанияПериода = Читалка.GetDateTime(4);
							Ссылка.Комментарий = Читалка.GetString(8);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(12))[0]==1;
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(13))[0]==1;
							Ссылка.ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(14))[0]==1;
							Ссылка.ДокИнвентаризация = V82.ДокументыСсылка.ИнвентаризацияНЗП.ВзятьИзКэша((byte[])Читалка.GetValue(17));
							Ссылка.ИспользоватьПодразделенияНЗП = ((byte[])Читалка.GetValue(18))[0]==1;
							Ссылка.ИспользоватьНаработку = ((byte[])Читалка.GetValue(19))[0]==1;
							return Ссылка;
						}
						else
						{
							return null;
						}
					}
				}
			}
		}
		
		public static ДокументыСсылка.РаспределениеМатериаловНаВыпуск НайтиПоНомеру(string Номер)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Fld10291 [ДатаНачалаПериода]
					,_Fld18833 [ДатаОкончанияПериода]
					,_Fld10292_TYPE [Заказ_Тип],_Fld10292_RRRef [Заказ],_Fld10292_RTRef [Заказ_Вид]
					,_Fld10293 [Комментарий]
					,_Fld10294RRef [НоменклатурнаяГруппа]
					,_Fld10295RRef [Организация]
					,_Fld10296RRef [Ответственный]
					,_Fld10297 [ОтражатьВБухгалтерскомУчете]
					,_Fld10298 [ОтражатьВНалоговомУчете]
					,_Fld10299 [ОтражатьВУправленческомУчете]
					,_Fld10300RRef [Подразделение]
					,_Fld10301RRef [ПодразделениеОрганизации]
					,_Fld10302RRef [ДокИнвентаризация]
					,_Fld18632 [ИспользоватьПодразделенияНЗП]
					,_Fld19069 [ИспользоватьНаработку]
					From _Document417(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.РаспределениеМатериаловНаВыпуск();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаНачалаПериода = Читалка.GetDateTime(3);
							Ссылка.ДатаОкончанияПериода = Читалка.GetDateTime(4);
							Ссылка.Комментарий = Читалка.GetString(8);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(12))[0]==1;
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(13))[0]==1;
							Ссылка.ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(14))[0]==1;
							Ссылка.ДокИнвентаризация = V82.ДокументыСсылка.ИнвентаризацияНЗП.ВзятьИзКэша((byte[])Читалка.GetValue(17));
							Ссылка.ИспользоватьПодразделенияНЗП = ((byte[])Читалка.GetValue(18))[0]==1;
							Ссылка.ИспользоватьНаработку = ((byte[])Читалка.GetValue(19))[0]==1;
							return Ссылка;
						}
						else
						{
							return null;
						}
					}
				}
			}
		}
		
		public static ДокументыВыборка.РаспределениеМатериаловНаВыпуск Выбрать()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1000 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Fld10291 [ДатаНачалаПериода]
					,_Fld18833 [ДатаОкончанияПериода]
					,_Fld10292_TYPE [Заказ_Тип],_Fld10292_RRRef [Заказ],_Fld10292_RTRef [Заказ_Вид]
					,_Fld10293 [Комментарий]
					,_Fld10294RRef [НоменклатурнаяГруппа]
					,_Fld10295RRef [Организация]
					,_Fld10296RRef [Ответственный]
					,_Fld10297 [ОтражатьВБухгалтерскомУчете]
					,_Fld10298 [ОтражатьВНалоговомУчете]
					,_Fld10299 [ОтражатьВУправленческомУчете]
					,_Fld10300RRef [Подразделение]
					,_Fld10301RRef [ПодразделениеОрганизации]
					,_Fld10302RRef [ДокИнвентаризация]
					,_Fld18632 [ИспользоватьПодразделенияНЗП]
					,_Fld19069 [ИспользоватьНаработку]
					From _Document417(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.РаспределениеМатериаловНаВыпуск();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.РаспределениеМатериаловНаВыпуск();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаНачалаПериода = Читалка.GetDateTime(3);
							Ссылка.ДатаОкончанияПериода = Читалка.GetDateTime(4);
							Ссылка.Комментарий = Читалка.GetString(8);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(12))[0]==1;
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(13))[0]==1;
							Ссылка.ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(14))[0]==1;
							Ссылка.ДокИнвентаризация = V82.ДокументыСсылка.ИнвентаризацияНЗП.ВзятьИзКэша((byte[])Читалка.GetValue(17));
							Ссылка.ИспользоватьПодразделенияНЗП = ((byte[])Читалка.GetValue(18))[0]==1;
							Ссылка.ИспользоватьНаработку = ((byte[])Читалка.GetValue(19))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.РаспределениеМатериаловНаВыпуск ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = string.Format(@"Select top {0} 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Fld10291 [ДатаНачалаПериода]
					,_Fld18833 [ДатаОкончанияПериода]
					,_Fld10292_TYPE [Заказ_Тип],_Fld10292_RRRef [Заказ],_Fld10292_RTRef [Заказ_Вид]
					,_Fld10293 [Комментарий]
					,_Fld10294RRef [НоменклатурнаяГруппа]
					,_Fld10295RRef [Организация]
					,_Fld10296RRef [Ответственный]
					,_Fld10297 [ОтражатьВБухгалтерскомУчете]
					,_Fld10298 [ОтражатьВНалоговомУчете]
					,_Fld10299 [ОтражатьВУправленческомУчете]
					,_Fld10300RRef [Подразделение]
					,_Fld10301RRef [ПодразделениеОрганизации]
					,_Fld10302RRef [ДокИнвентаризация]
					,_Fld18632 [ИспользоватьПодразделенияНЗП]
					,_Fld19069 [ИспользоватьНаработку]
					From _Document417(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.РаспределениеМатериаловНаВыпуск();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.РаспределениеМатериаловНаВыпуск();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаНачалаПериода = Читалка.GetDateTime(3);
							Ссылка.ДатаОкончанияПериода = Читалка.GetDateTime(4);
							Ссылка.Комментарий = Читалка.GetString(8);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(12))[0]==1;
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(13))[0]==1;
							Ссылка.ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(14))[0]==1;
							Ссылка.ДокИнвентаризация = V82.ДокументыСсылка.ИнвентаризацияНЗП.ВзятьИзКэша((byte[])Читалка.GetValue(17));
							Ссылка.ИспользоватьПодразделенияНЗП = ((byte[])Читалка.GetValue(18))[0]==1;
							Ссылка.ИспользоватьНаработку = ((byte[])Читалка.GetValue(19))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.РаспределениеМатериаловНаВыпуск ВыбратьПоНомеру(int Первые,string Мин,string Макс)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = string.Format(@"Select top {0} 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Fld10291 [ДатаНачалаПериода]
					,_Fld18833 [ДатаОкончанияПериода]
					,_Fld10292_TYPE [Заказ_Тип],_Fld10292_RRRef [Заказ],_Fld10292_RTRef [Заказ_Вид]
					,_Fld10293 [Комментарий]
					,_Fld10294RRef [НоменклатурнаяГруппа]
					,_Fld10295RRef [Организация]
					,_Fld10296RRef [Ответственный]
					,_Fld10297 [ОтражатьВБухгалтерскомУчете]
					,_Fld10298 [ОтражатьВНалоговомУчете]
					,_Fld10299 [ОтражатьВУправленческомУчете]
					,_Fld10300RRef [Подразделение]
					,_Fld10301RRef [ПодразделениеОрганизации]
					,_Fld10302RRef [ДокИнвентаризация]
					,_Fld18632 [ИспользоватьПодразделенияНЗП]
					,_Fld19069 [ИспользоватьНаработку]
					From _Document417(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.РаспределениеМатериаловНаВыпуск();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.РаспределениеМатериаловНаВыпуск();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаНачалаПериода = Читалка.GetDateTime(3);
							Ссылка.ДатаОкончанияПериода = Читалка.GetDateTime(4);
							Ссылка.Комментарий = Читалка.GetString(8);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(12))[0]==1;
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(13))[0]==1;
							Ссылка.ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(14))[0]==1;
							Ссылка.ДокИнвентаризация = V82.ДокументыСсылка.ИнвентаризацияНЗП.ВзятьИзКэша((byte[])Читалка.GetValue(17));
							Ссылка.ИспользоватьПодразделенияНЗП = ((byte[])Читалка.GetValue(18))[0]==1;
							Ссылка.ИспользоватьНаработку = ((byte[])Читалка.GetValue(19))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.РаспределениеМатериаловНаВыпуск СтраницаПоСсылке(int Размер,int Номер)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1000 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Fld10291 [ДатаНачалаПериода]
					,_Fld18833 [ДатаОкончанияПериода]
					,_Fld10292_TYPE [Заказ_Тип],_Fld10292_RRRef [Заказ],_Fld10292_RTRef [Заказ_Вид]
					,_Fld10293 [Комментарий]
					,_Fld10294RRef [НоменклатурнаяГруппа]
					,_Fld10295RRef [Организация]
					,_Fld10296RRef [Ответственный]
					,_Fld10297 [ОтражатьВБухгалтерскомУчете]
					,_Fld10298 [ОтражатьВНалоговомУчете]
					,_Fld10299 [ОтражатьВУправленческомУчете]
					,_Fld10300RRef [Подразделение]
					,_Fld10301RRef [ПодразделениеОрганизации]
					,_Fld10302RRef [ДокИнвентаризация]
					,_Fld18632 [ИспользоватьПодразделенияНЗП]
					,_Fld19069 [ИспользоватьНаработку]
					From _Document417(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.РаспределениеМатериаловНаВыпуск();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.РаспределениеМатериаловНаВыпуск();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаНачалаПериода = Читалка.GetDateTime(3);
							Ссылка.ДатаОкончанияПериода = Читалка.GetDateTime(4);
							Ссылка.Комментарий = Читалка.GetString(8);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(12))[0]==1;
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(13))[0]==1;
							Ссылка.ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(14))[0]==1;
							Ссылка.ДокИнвентаризация = V82.ДокументыСсылка.ИнвентаризацияНЗП.ВзятьИзКэша((byte[])Читалка.GetValue(17));
							Ссылка.ИспользоватьПодразделенияНЗП = ((byte[])Читалка.GetValue(18))[0]==1;
							Ссылка.ИспользоватьНаработку = ((byte[])Читалка.GetValue(19))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.РаспределениеМатериаловНаВыпуск СтраницаПоНомеру(int Размер,int Номер)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1000 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Fld10291 [ДатаНачалаПериода]
					,_Fld18833 [ДатаОкончанияПериода]
					,_Fld10292_TYPE [Заказ_Тип],_Fld10292_RRRef [Заказ],_Fld10292_RTRef [Заказ_Вид]
					,_Fld10293 [Комментарий]
					,_Fld10294RRef [НоменклатурнаяГруппа]
					,_Fld10295RRef [Организация]
					,_Fld10296RRef [Ответственный]
					,_Fld10297 [ОтражатьВБухгалтерскомУчете]
					,_Fld10298 [ОтражатьВНалоговомУчете]
					,_Fld10299 [ОтражатьВУправленческомУчете]
					,_Fld10300RRef [Подразделение]
					,_Fld10301RRef [ПодразделениеОрганизации]
					,_Fld10302RRef [ДокИнвентаризация]
					,_Fld18632 [ИспользоватьПодразделенияНЗП]
					,_Fld19069 [ИспользоватьНаработку]
					From _Document417(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.РаспределениеМатериаловНаВыпуск();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.РаспределениеМатериаловНаВыпуск();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ДатаНачалаПериода = Читалка.GetDateTime(3);
							Ссылка.ДатаОкончанияПериода = Читалка.GetDateTime(4);
							Ссылка.Комментарий = Читалка.GetString(8);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(12))[0]==1;
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(13))[0]==1;
							Ссылка.ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(14))[0]==1;
							Ссылка.ДокИнвентаризация = V82.ДокументыСсылка.ИнвентаризацияНЗП.ВзятьИзКэша((byte[])Читалка.GetValue(17));
							Ссылка.ИспользоватьПодразделенияНЗП = ((byte[])Читалка.GetValue(18))[0]==1;
							Ссылка.ИспользоватьНаработку = ((byte[])Читалка.GetValue(19))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.РаспределениеМатериаловНаВыпуск СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.РаспределениеМатериаловНаВыпуск();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			Объект.ДокИнвентаризация = new V82.ДокументыСсылка.ИнвентаризацияНЗП();
			return Объект;
		}
	}
}