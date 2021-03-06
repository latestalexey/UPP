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
	public partial class ПереоценкаТоваровВРознице:ДокументМенеджер
	{
		
		public static ДокументыСсылка.ПереоценкаТоваровВРознице НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld8215RRef [Организация]
					,_Fld8216RRef [Склад]
					,_Fld8217RRef [Подразделение]
					,_Fld8219 [Комментарий]
					,_Fld8218RRef [Ответственный]
					,_Fld8220RRef [ВидОперации]
					,_Fld8221RRef [ДокументУстановкаЦен]
					From _Document377(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПереоценкаТоваровВРознице();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПереоценкаТоваровВРознице.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Ссылка.ДокументУстановкаЦен = V82.ДокументыСсылка.УстановкаЦенНоменклатуры.ВзятьИзКэша((byte[])Читалка.GetValue(9));
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
		
		public static ДокументыСсылка.ПереоценкаТоваровВРознице НайтиПоНомеру(string Номер)
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
					,_Fld8215RRef [Организация]
					,_Fld8216RRef [Склад]
					,_Fld8217RRef [Подразделение]
					,_Fld8219 [Комментарий]
					,_Fld8218RRef [Ответственный]
					,_Fld8220RRef [ВидОперации]
					,_Fld8221RRef [ДокументУстановкаЦен]
					From _Document377(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПереоценкаТоваровВРознице();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПереоценкаТоваровВРознице.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Ссылка.ДокументУстановкаЦен = V82.ДокументыСсылка.УстановкаЦенНоменклатуры.ВзятьИзКэша((byte[])Читалка.GetValue(9));
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
		
		public static ДокументыВыборка.ПереоценкаТоваровВРознице Выбрать()
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
					,_Fld8215RRef [Организация]
					,_Fld8216RRef [Склад]
					,_Fld8217RRef [Подразделение]
					,_Fld8219 [Комментарий]
					,_Fld8218RRef [Ответственный]
					,_Fld8220RRef [ВидОперации]
					,_Fld8221RRef [ДокументУстановкаЦен]
					From _Document377(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ПереоценкаТоваровВРознице();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПереоценкаТоваровВРознице();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПереоценкаТоваровВРознице.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Ссылка.ДокументУстановкаЦен = V82.ДокументыСсылка.УстановкаЦенНоменклатуры.ВзятьИзКэша((byte[])Читалка.GetValue(9));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПереоценкаТоваровВРознице ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld8215RRef [Организация]
					,_Fld8216RRef [Склад]
					,_Fld8217RRef [Подразделение]
					,_Fld8219 [Комментарий]
					,_Fld8218RRef [Ответственный]
					,_Fld8220RRef [ВидОперации]
					,_Fld8221RRef [ДокументУстановкаЦен]
					From _Document377(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ПереоценкаТоваровВРознице();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПереоценкаТоваровВРознице();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПереоценкаТоваровВРознице.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Ссылка.ДокументУстановкаЦен = V82.ДокументыСсылка.УстановкаЦенНоменклатуры.ВзятьИзКэша((byte[])Читалка.GetValue(9));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПереоценкаТоваровВРознице ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld8215RRef [Организация]
					,_Fld8216RRef [Склад]
					,_Fld8217RRef [Подразделение]
					,_Fld8219 [Комментарий]
					,_Fld8218RRef [Ответственный]
					,_Fld8220RRef [ВидОперации]
					,_Fld8221RRef [ДокументУстановкаЦен]
					From _Document377(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ПереоценкаТоваровВРознице();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПереоценкаТоваровВРознице();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПереоценкаТоваровВРознице.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Ссылка.ДокументУстановкаЦен = V82.ДокументыСсылка.УстановкаЦенНоменклатуры.ВзятьИзКэша((byte[])Читалка.GetValue(9));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПереоценкаТоваровВРознице СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld8215RRef [Организация]
					,_Fld8216RRef [Склад]
					,_Fld8217RRef [Подразделение]
					,_Fld8219 [Комментарий]
					,_Fld8218RRef [Ответственный]
					,_Fld8220RRef [ВидОперации]
					,_Fld8221RRef [ДокументУстановкаЦен]
					From _Document377(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ПереоценкаТоваровВРознице();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПереоценкаТоваровВРознице();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПереоценкаТоваровВРознице.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Ссылка.ДокументУстановкаЦен = V82.ДокументыСсылка.УстановкаЦенНоменклатуры.ВзятьИзКэша((byte[])Читалка.GetValue(9));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ПереоценкаТоваровВРознице СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld8215RRef [Организация]
					,_Fld8216RRef [Склад]
					,_Fld8217RRef [Подразделение]
					,_Fld8219 [Комментарий]
					,_Fld8218RRef [Ответственный]
					,_Fld8220RRef [ВидОперации]
					,_Fld8221RRef [ДокументУстановкаЦен]
					From _Document377(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ПереоценкаТоваровВРознице();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ПереоценкаТоваровВРознице();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(6);
							Ссылка.ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПереоценкаТоваровВРознице.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Ссылка.ДокументУстановкаЦен = V82.ДокументыСсылка.УстановкаЦенНоменклатуры.ВзятьИзКэша((byte[])Читалка.GetValue(9));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.ПереоценкаТоваровВРознице СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.ПереоценкаТоваровВРознице();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			Объект.ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийПереоценкаТоваровВРознице.ПустаяСсылка;
			Объект.ДокументУстановкаЦен = new V82.ДокументыСсылка.УстановкаЦенНоменклатуры();
			return Объект;
		}
	}
}