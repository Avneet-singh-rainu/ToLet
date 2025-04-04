using System;
using System.Collections.Generic;

namespace ToLet.API.Models;

public partial class Room
{
    public int RoomId { get; set; }

    public int RoomOwner { get; set; }

    public string? RoomImages { get; set; }

    public string? RoomAddress { get; set; }

    public decimal? RoomLongitude { get; set; }

    public decimal? RoomLatitude { get; set; }

    public int? RoomPrice { get; set; }

    public bool? RoomIsSharing { get; set; }

    public string? RoomFurnished { get; set; }

    public int? RoomSecurityFee { get; set; }

    public bool? RoomAc { get; set; }

    public bool? RoomCommodityBills { get; set; }

    public string? RoomDescription { get; set; }

    public string? RoomVideo { get; set; }

    public DateTime? RoomNextAvailability { get; set; }

    public int? RoomPriorNoticePeriod { get; set; }

    public bool? RoomWaitingList { get; set; }

    public virtual User RoomOwnerNavigation { get; set; } = null!;
}
