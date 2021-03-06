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
	///(Упр)
	///</summary>
	public partial class УстановкаЗависимостейОборотовПоСтатьям:ДокументМенеджер
	{
		
		public static ДокументыСсылка.УстановкаЗависимостейОборотовПоСтатьям НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld12165RRef [Сценарий]
					,_Fld12166RRef [СтатьяОборотовВлияющая]
					,_Fld12167RRef [ЦФО]
					,_Fld12168RRef [Проект]
					,_Fld12169RRef [Контрагент]
					,_Fld12170_TYPE [Номенклатура_Тип],_Fld12170_RRRef [Номенклатура],_Fld12170_RTRef [Номенклатура_Вид]
					,_Fld12171RRef [Ответственный]
					,_Fld12172 [Комментарий]
					From _Document475(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.УстановкаЗависимостейОборотовПоСтатьям();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(12);
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
		
		public static ДокументыСсылка.УстановкаЗависимостейОборотовПоСтатьям НайтиПоНомеру(string Номер)
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
					,_Fld12165RRef [Сценарий]
					,_Fld12166RRef [СтатьяОборотовВлияющая]
					,_Fld12167RRef [ЦФО]
					,_Fld12168RRef [Проект]
					,_Fld12169RRef [Контрагент]
					,_Fld12170_TYPE [Номенклатура_Тип],_Fld12170_RRRef [Номенклатура],_Fld12170_RTRef [Номенклатура_Вид]
					,_Fld12171RRef [Ответственный]
					,_Fld12172 [Комментарий]
					From _Document475(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.УстановкаЗависимостейОборотовПоСтатьям();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(12);
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
		
		public static ДокументыВыборка.УстановкаЗависимостейОборотовПоСтатьям Выбрать()
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
					,_Fld12165RRef [Сценарий]
					,_Fld12166RRef [СтатьяОборотовВлияющая]
					,_Fld12167RRef [ЦФО]
					,_Fld12168RRef [Проект]
					,_Fld12169RRef [Контрагент]
					,_Fld12170_TYPE [Номенклатура_Тип],_Fld12170_RRRef [Номенклатура],_Fld12170_RTRef [Номенклатура_Вид]
					,_Fld12171RRef [Ответственный]
					,_Fld12172 [Комментарий]
					From _Document475(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.УстановкаЗависимостейОборотовПоСтатьям();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.УстановкаЗависимостейОборотовПоСтатьям();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(12);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.УстановкаЗависимостейОборотовПоСтатьям ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld12165RRef [Сценарий]
					,_Fld12166RRef [СтатьяОборотовВлияющая]
					,_Fld12167RRef [ЦФО]
					,_Fld12168RRef [Проект]
					,_Fld12169RRef [Контрагент]
					,_Fld12170_TYPE [Номенклатура_Тип],_Fld12170_RRRef [Номенклатура],_Fld12170_RTRef [Номенклатура_Вид]
					,_Fld12171RRef [Ответственный]
					,_Fld12172 [Комментарий]
					From _Document475(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.УстановкаЗависимостейОборотовПоСтатьям();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.УстановкаЗависимостейОборотовПоСтатьям();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(12);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.УстановкаЗависимостейОборотовПоСтатьям ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld12165RRef [Сценарий]
					,_Fld12166RRef [СтатьяОборотовВлияющая]
					,_Fld12167RRef [ЦФО]
					,_Fld12168RRef [Проект]
					,_Fld12169RRef [Контрагент]
					,_Fld12170_TYPE [Номенклатура_Тип],_Fld12170_RRRef [Номенклатура],_Fld12170_RTRef [Номенклатура_Вид]
					,_Fld12171RRef [Ответственный]
					,_Fld12172 [Комментарий]
					From _Document475(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.УстановкаЗависимостейОборотовПоСтатьям();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.УстановкаЗависимостейОборотовПоСтатьям();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(12);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.УстановкаЗависимостейОборотовПоСтатьям СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld12165RRef [Сценарий]
					,_Fld12166RRef [СтатьяОборотовВлияющая]
					,_Fld12167RRef [ЦФО]
					,_Fld12168RRef [Проект]
					,_Fld12169RRef [Контрагент]
					,_Fld12170_TYPE [Номенклатура_Тип],_Fld12170_RRRef [Номенклатура],_Fld12170_RTRef [Номенклатура_Вид]
					,_Fld12171RRef [Ответственный]
					,_Fld12172 [Комментарий]
					From _Document475(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.УстановкаЗависимостейОборотовПоСтатьям();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.УстановкаЗависимостейОборотовПоСтатьям();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(12);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.УстановкаЗависимостейОборотовПоСтатьям СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld12165RRef [Сценарий]
					,_Fld12166RRef [СтатьяОборотовВлияющая]
					,_Fld12167RRef [ЦФО]
					,_Fld12168RRef [Проект]
					,_Fld12169RRef [Контрагент]
					,_Fld12170_TYPE [Номенклатура_Тип],_Fld12170_RRRef [Номенклатура],_Fld12170_RTRef [Номенклатура_Вид]
					,_Fld12171RRef [Ответственный]
					,_Fld12172 [Комментарий]
					From _Document475(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.УстановкаЗависимостейОборотовПоСтатьям();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.УстановкаЗависимостейОборотовПоСтатьям();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(12);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.УстановкаЗависимостейОборотовПоСтатьям СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.УстановкаЗависимостейОборотовПоСтатьям();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			return Объект;
		}
	}
}