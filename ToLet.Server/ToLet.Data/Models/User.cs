using System;
using System.Collections.Generic;

namespace ToLet.Data.Models;

public partial class User
{
    public int UserId { get; set; }

    public string? UserName { get; set; }

    public string? UserEmail { get; set; }

    public string? UserPhone { get; set; }

    public string? UserRole { get; set; }

    public string? UserAadharcard { get; set; }

    public string? UserImage { get; set; }

    public string? UserWorkAddress { get; set; }

    public virtual ICollection<Room> Rooms { get; set; } = new List<Room>();
}
