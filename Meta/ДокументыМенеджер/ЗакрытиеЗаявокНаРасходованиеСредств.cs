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
	public partial class ЗакрытиеЗаявокНаРасходованиеСредств:ДокументМенеджер
	{
		
		public static ДокументыСсылка.ЗакрытиеЗаявокНаРасходованиеСредств НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld4578RRef [Ответственный]
					,_Fld4579 [ОтборЦФО]
					,_Fld4580RRef [ЦФО]
					,_Fld4581 [ОтборОтветственный]
					,_Fld4582RRef [ОтветственныйЗаявка]
					,_Fld4583 [ОтборКонтрагент]
					,_Fld4584RRef [Контрагент]
					,_Fld4585RRef [Состояние]
					,_Fld4586 [Комментарий]
					,_Fld4587 [ОтборДатаНач]
					,_Fld4588 [ОтборДатаКон]
					From _Document263(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ЗакрытиеЗаявокНаРасходованиеСредств();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ОтборЦФО = ((byte[])Читалка.GetValue(4))[0]==1;
							Ссылка.ОтборОтветственный = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ОтборКонтрагент = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(10));
							Ссылка.Комментарий = Читалка.GetString(11);
							Ссылка.ОтборДатаНач = Читалка.GetDateTime(12);
							Ссылка.ОтборДатаКон = Читалка.GetDateTime(13);
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
		
		public static ДокументыСсылка.ЗакрытиеЗаявокНаРасходованиеСредств НайтиПоНомеру(string Номер)
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
					,_Fld4578RRef [Ответственный]
					,_Fld4579 [ОтборЦФО]
					,_Fld4580RRef [ЦФО]
					,_Fld4581 [ОтборОтветственный]
					,_Fld4582RRef [ОтветственныйЗаявка]
					,_Fld4583 [ОтборКонтрагент]
					,_Fld4584RRef [Контрагент]
					,_Fld4585RRef [Состояние]
					,_Fld4586 [Комментарий]
					,_Fld4587 [ОтборДатаНач]
					,_Fld4588 [ОтборДатаКон]
					From _Document263(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ЗакрытиеЗаявокНаРасходованиеСредств();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ОтборЦФО = ((byte[])Читалка.GetValue(4))[0]==1;
							Ссылка.ОтборОтветственный = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ОтборКонтрагент = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(10));
							Ссылка.Комментарий = Читалка.GetString(11);
							Ссылка.ОтборДатаНач = Читалка.GetDateTime(12);
							Ссылка.ОтборДатаКон = Читалка.GetDateTime(13);
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
		
		public static ДокументыВыборка.ЗакрытиеЗаявокНаРасходованиеСредств Выбрать()
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
					,_Fld4578RRef [Ответственный]
					,_Fld4579 [ОтборЦФО]
					,_Fld4580RRef [ЦФО]
					,_Fld4581 [ОтборОтветственный]
					,_Fld4582RRef [ОтветственныйЗаявка]
					,_Fld4583 [ОтборКонтрагент]
					,_Fld4584RRef [Контрагент]
					,_Fld4585RRef [Состояние]
					,_Fld4586 [Комментарий]
					,_Fld4587 [ОтборДатаНач]
					,_Fld4588 [ОтборДатаКон]
					From _Document263(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ЗакрытиеЗаявокНаРасходованиеСредств();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ЗакрытиеЗаявокНаРасходованиеСредств();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ОтборЦФО = ((byte[])Читалка.GetValue(4))[0]==1;
							Ссылка.ОтборОтветственный = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ОтборКонтрагент = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(10));
							Ссылка.Комментарий = Читалка.GetString(11);
							Ссылка.ОтборДатаНач = Читалка.GetDateTime(12);
							Ссылка.ОтборДатаКон = Читалка.GetDateTime(13);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ЗакрытиеЗаявокНаРасходованиеСредств ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld4578RRef [Ответственный]
					,_Fld4579 [ОтборЦФО]
					,_Fld4580RRef [ЦФО]
					,_Fld4581 [ОтборОтветственный]
					,_Fld4582RRef [ОтветственныйЗаявка]
					,_Fld4583 [ОтборКонтрагент]
					,_Fld4584RRef [Контрагент]
					,_Fld4585RRef [Состояние]
					,_Fld4586 [Комментарий]
					,_Fld4587 [ОтборДатаНач]
					,_Fld4588 [ОтборДатаКон]
					From _Document263(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ЗакрытиеЗаявокНаРасходованиеСредств();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ЗакрытиеЗаявокНаРасходованиеСредств();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ОтборЦФО = ((byte[])Читалка.GetValue(4))[0]==1;
							Ссылка.ОтборОтветственный = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ОтборКонтрагент = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(10));
							Ссылка.Комментарий = Читалка.GetString(11);
							Ссылка.ОтборДатаНач = Читалка.GetDateTime(12);
							Ссылка.ОтборДатаКон = Читалка.GetDateTime(13);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ЗакрытиеЗаявокНаРасходованиеСредств ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld4578RRef [Ответственный]
					,_Fld4579 [ОтборЦФО]
					,_Fld4580RRef [ЦФО]
					,_Fld4581 [ОтборОтветственный]
					,_Fld4582RRef [ОтветственныйЗаявка]
					,_Fld4583 [ОтборКонтрагент]
					,_Fld4584RRef [Контрагент]
					,_Fld4585RRef [Состояние]
					,_Fld4586 [Комментарий]
					,_Fld4587 [ОтборДатаНач]
					,_Fld4588 [ОтборДатаКон]
					From _Document263(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ЗакрытиеЗаявокНаРасходованиеСредств();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ЗакрытиеЗаявокНаРасходованиеСредств();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ОтборЦФО = ((byte[])Читалка.GetValue(4))[0]==1;
							Ссылка.ОтборОтветственный = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ОтборКонтрагент = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(10));
							Ссылка.Комментарий = Читалка.GetString(11);
							Ссылка.ОтборДатаНач = Читалка.GetDateTime(12);
							Ссылка.ОтборДатаКон = Читалка.GetDateTime(13);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ЗакрытиеЗаявокНаРасходованиеСредств СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld4578RRef [Ответственный]
					,_Fld4579 [ОтборЦФО]
					,_Fld4580RRef [ЦФО]
					,_Fld4581 [ОтборОтветственный]
					,_Fld4582RRef [ОтветственныйЗаявка]
					,_Fld4583 [ОтборКонтрагент]
					,_Fld4584RRef [Контрагент]
					,_Fld4585RRef [Состояние]
					,_Fld4586 [Комментарий]
					,_Fld4587 [ОтборДатаНач]
					,_Fld4588 [ОтборДатаКон]
					From _Document263(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ЗакрытиеЗаявокНаРасходованиеСредств();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ЗакрытиеЗаявокНаРасходованиеСредств();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ОтборЦФО = ((byte[])Читалка.GetValue(4))[0]==1;
							Ссылка.ОтборОтветственный = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ОтборКонтрагент = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(10));
							Ссылка.Комментарий = Читалка.GetString(11);
							Ссылка.ОтборДатаНач = Читалка.GetDateTime(12);
							Ссылка.ОтборДатаКон = Читалка.GetDateTime(13);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ЗакрытиеЗаявокНаРасходованиеСредств СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld4578RRef [Ответственный]
					,_Fld4579 [ОтборЦФО]
					,_Fld4580RRef [ЦФО]
					,_Fld4581 [ОтборОтветственный]
					,_Fld4582RRef [ОтветственныйЗаявка]
					,_Fld4583 [ОтборКонтрагент]
					,_Fld4584RRef [Контрагент]
					,_Fld4585RRef [Состояние]
					,_Fld4586 [Комментарий]
					,_Fld4587 [ОтборДатаНач]
					,_Fld4588 [ОтборДатаКон]
					From _Document263(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ЗакрытиеЗаявокНаРасходованиеСредств();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ЗакрытиеЗаявокНаРасходованиеСредств();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ОтборЦФО = ((byte[])Читалка.GetValue(4))[0]==1;
							Ссылка.ОтборОтветственный = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ОтборКонтрагент = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(10));
							Ссылка.Комментарий = Читалка.GetString(11);
							Ссылка.ОтборДатаНач = Читалка.GetDateTime(12);
							Ссылка.ОтборДатаКон = Читалка.GetDateTime(13);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.ЗакрытиеЗаявокНаРасходованиеСредств СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.ЗакрытиеЗаявокНаРасходованиеСредств();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			Объект.Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка;
			return Объект;
		}
	}
}