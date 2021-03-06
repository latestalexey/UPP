﻿
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.Справочники;//Менеджер;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.Справочники//Менеджер
{
	public partial class ЗанятияКурсовОбучения:СправочникМенеджер
	{
		
		public static СправочникиСсылка.ЗанятияКурсовОбучения НайтиПоСсылке(Guid _Ссылка)
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
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld1142 [ОписаниеЗанятия]
					,_Fld1143 [ДлительностьЗанятия]
					,_Fld1144RRef [ВидЗанятия]
					From _Reference57(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗанятияКурсовОбучения();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
								Ссылка.ОписаниеЗанятия = Читалка.GetString(5);
								Ссылка.ДлительностьЗанятия = Читалка.GetDecimal(6);
								Ссылка.ВидЗанятия = V82.СправочникиСсылка.ФормыОбучения.ВзятьИзКэша((byte[])Читалка.GetValue(7));
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
		
		public static СправочникиВыборка.ЗанятияКурсовОбучения Выбрать()
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
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld1142 [ОписаниеЗанятия]
					,_Fld1143 [ДлительностьЗанятия]
					,_Fld1144RRef [ВидЗанятия]
					From _Reference57(NOLOCK) ";
					var Выборка = new V82.СправочникиВыборка.ЗанятияКурсовОбучения();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗанятияКурсовОбучения();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
								Ссылка.ОписаниеЗанятия = Читалка.GetString(5);
								Ссылка.ДлительностьЗанятия = Читалка.GetDecimal(6);
								Ссылка.ВидЗанятия = V82.СправочникиСсылка.ФормыОбучения.ВзятьИзКэша((byte[])Читалка.GetValue(7));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ЗанятияКурсовОбучения ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld1142 [ОписаниеЗанятия]
					,_Fld1143 [ДлительностьЗанятия]
					,_Fld1144RRef [ВидЗанятия]
					From _Reference57(NOLOCK)
					Where _IDRRef between @Мин and @Макс 
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ЗанятияКурсовОбучения();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗанятияКурсовОбучения();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
								Ссылка.ОписаниеЗанятия = Читалка.GetString(5);
								Ссылка.ДлительностьЗанятия = Читалка.GetDecimal(6);
								Ссылка.ВидЗанятия = V82.СправочникиСсылка.ФормыОбучения.ВзятьИзКэша((byte[])Читалка.GetValue(7));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ЗанятияКурсовОбучения ВыбратьПоНаименованию(int Первые,string Мин,string Макс)
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
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld1142 [ОписаниеЗанятия]
					,_Fld1143 [ДлительностьЗанятия]
					,_Fld1144RRef [ВидЗанятия]
					From _Reference57(NOLOCK)
					Where _Description between @Мин and @Макс
					Order by _Description", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ЗанятияКурсовОбучения();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗанятияКурсовОбучения();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
								Ссылка.ОписаниеЗанятия = Читалка.GetString(5);
								Ссылка.ДлительностьЗанятия = Читалка.GetDecimal(6);
								Ссылка.ВидЗанятия = V82.СправочникиСсылка.ФормыОбучения.ВзятьИзКэша((byte[])Читалка.GetValue(7));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ЗанятияКурсовОбучения СтраницаПоСсылке(int Размер,int Номер)
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
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld1142 [ОписаниеЗанятия]
					,_Fld1143 [ДлительностьЗанятия]
					,_Fld1144RRef [ВидЗанятия]
					From _Reference57(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ЗанятияКурсовОбучения();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗанятияКурсовОбучения();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
								Ссылка.ОписаниеЗанятия = Читалка.GetString(5);
								Ссылка.ДлительностьЗанятия = Читалка.GetDecimal(6);
								Ссылка.ВидЗанятия = V82.СправочникиСсылка.ФормыОбучения.ВзятьИзКэша((byte[])Читалка.GetValue(7));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ЗанятияКурсовОбучения СтраницаПоНаименованию(int Размер,int Номер)
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
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld1142 [ОписаниеЗанятия]
					,_Fld1143 [ДлительностьЗанятия]
					,_Fld1144RRef [ВидЗанятия]
					From _Reference57(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ЗанятияКурсовОбучения();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗанятияКурсовОбучения();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
								Ссылка.ОписаниеЗанятия = Читалка.GetString(5);
								Ссылка.ДлительностьЗанятия = Читалка.GetDecimal(6);
								Ссылка.ВидЗанятия = V82.СправочникиСсылка.ФормыОбучения.ВзятьИзКэша((byte[])Читалка.GetValue(7));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.СправочникиОбъект.ЗанятияКурсовОбучения СоздатьЭлемент()
		{
			var Объект = new V82.СправочникиОбъект.ЗанятияКурсовОбучения();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.ОписаниеЗанятия = "";
			Объект.ВидЗанятия = new V82.СправочникиСсылка.ФормыОбучения();
			return Объект;
		}
		
		public static СправочникиВыборка.ЗанятияКурсовОбучения ИерархияВыбратьПоСсылке(Guid Родитель,int Режим,int Первые,Guid Мин,Guid Макс)
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
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld1142 [ОписаниеЗанятия]
					,_Fld1143 [ДлительностьЗанятия]
					,_Fld1144RRef [ВидЗанятия]
					From _Reference57(NOLOCK)
					Where _IDRRef between @Мин and @Макс 
					AND _ParentIDRRef = @Родитель
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Родитель", Родитель);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ЗанятияКурсовОбучения();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗанятияКурсовОбучения();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
								Ссылка.ОписаниеЗанятия = Читалка.GetString(5);
								Ссылка.ДлительностьЗанятия = Читалка.GetDecimal(6);
								Ссылка.ВидЗанятия = V82.СправочникиСсылка.ФормыОбучения.ВзятьИзКэша((byte[])Читалка.GetValue(7));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ЗанятияКурсовОбучения ИерархияСтраницаПоСсылке(Guid Родитель,int Режим,int Размер,int Номер)
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
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld1142 [ОписаниеЗанятия]
					,_Fld1143 [ДлительностьЗанятия]
					,_Fld1144RRef [ВидЗанятия]
					From _Reference57(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ЗанятияКурсовОбучения();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ЗанятияКурсовОбучения();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Наименование = Читалка.GetString(4);
								Ссылка.ОписаниеЗанятия = Читалка.GetString(5);
								Ссылка.ДлительностьЗанятия = Читалка.GetDecimal(6);
								Ссылка.ВидЗанятия = V82.СправочникиСсылка.ФормыОбучения.ВзятьИзКэша((byte[])Читалка.GetValue(7));
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
	}
}