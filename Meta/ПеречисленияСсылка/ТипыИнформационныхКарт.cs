﻿
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///(Упр)
	///</summary>
	[DataContract]
	public enum ТипыИнформационныхКарт
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"b0853687-2999-4fe1-aea4-d60d055e27c4\", \"Представление\":\"Дисконтная\"}")]
		Дисконтная = 0,
		[EnumMember(Value = "{\"Ссылка\":\"dba1007b-e13a-49f4-b878-e61b451a6bcb\", \"Представление\":\"Регистрационная\"}")]
		Регистрационная = 1,
	}
	public static partial class ТипыИнформационныхКарт_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Дисконтная = new Guid("0dd6a4ae-5e05-c427-4fe1-2999b0853687");
		public static readonly Guid Регистрационная = new Guid("1be678b8-1a45-cb6b-49f4-e13adba1007b");
		public static ТипыИнформационныхКарт Получить(this ТипыИнформационныхКарт Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыИнформационныхКарт Получить(this ТипыИнформационныхКарт Значение, Guid Ссылка)
		{
			if(Ссылка == Дисконтная)
			{
				return ТипыИнформационныхКарт.Дисконтная;
			}
			else if(Ссылка == Регистрационная)
			{
				return ТипыИнформационныхКарт.Регистрационная;
			}
			return ТипыИнформационныхКарт.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыИнформационныхКарт Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыИнформационныхКарт Значение)
		{
			switch (Значение)
			{
				case ТипыИнформационныхКарт.Дисконтная: return Дисконтная;
				case ТипыИнформационныхКарт.Регистрационная: return Регистрационная;
			}
			return Guid.Empty;
		}
	}
}