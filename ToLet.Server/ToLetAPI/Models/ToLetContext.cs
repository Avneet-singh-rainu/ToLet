using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ToLet.API.Models;

public partial class ToLetContext : DbContext
{
    public ToLetContext()
    {
    }

    public ToLetContext(DbContextOptions<ToLetContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Room> Rooms { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=FLAMER;Database=ToLet;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Room>(entity =>
        {
            entity.HasKey(e => e.RoomId).HasName("PK__room__19675A8A68A2A4EF");

            entity.ToTable("room");

            entity.Property(e => e.RoomId).HasColumnName("room_id");
            entity.Property(e => e.RoomAc).HasColumnName("room_ac");
            entity.Property(e => e.RoomAddress).HasColumnName("room_address");
            entity.Property(e => e.RoomCommodityBills).HasColumnName("room_commodity_bills");
            entity.Property(e => e.RoomDescription).HasColumnName("room_description");
            entity.Property(e => e.RoomFurnished)
                .HasMaxLength(14)
                .IsUnicode(false)
                .HasColumnName("room_furnished");
            entity.Property(e => e.RoomImages).HasColumnName("room_images");
            entity.Property(e => e.RoomIsSharing).HasColumnName("room_is_sharing");
            entity.Property(e => e.RoomLatitude)
                .HasColumnType("decimal(9, 6)")
                .HasColumnName("room_latitude");
            entity.Property(e => e.RoomLongitude)
                .HasColumnType("decimal(9, 6)")
                .HasColumnName("room_longitude");
            entity.Property(e => e.RoomNextAvailability)
                .HasColumnType("datetime")
                .HasColumnName("room_next_availability");
            entity.Property(e => e.RoomOwner).HasColumnName("room_owner");
            entity.Property(e => e.RoomPrice).HasColumnName("room_price");
            entity.Property(e => e.RoomPriorNoticePeriod).HasColumnName("room_prior_notice_period");
            entity.Property(e => e.RoomSecurityFee).HasColumnName("room_security_fee");
            entity.Property(e => e.RoomVideo).HasColumnName("room_video");
            entity.Property(e => e.RoomWaitingList).HasColumnName("room_waiting_list");

            entity.HasOne(d => d.RoomOwnerNavigation).WithMany(p => p.Rooms)
                .HasForeignKey(d => d.RoomOwner)
                .HasConstraintName("FK_room_user");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__user__B9BE370FE0C5AD6E");

            entity.ToTable("user");

            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.UserAadharcard)
                .HasMaxLength(12)
                .IsUnicode(false)
                .HasColumnName("user_aadharcard");
            entity.Property(e => e.UserEmail)
                .HasMaxLength(32)
                .IsUnicode(false)
                .HasColumnName("user_email");
            entity.Property(e => e.UserImage).HasColumnName("user_image");
            entity.Property(e => e.UserName)
                .HasMaxLength(32)
                .IsUnicode(false)
                .HasColumnName("user_name");
            entity.Property(e => e.UserPhone)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("user_phone");
            entity.Property(e => e.UserRole)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("user_role");
            entity.Property(e => e.UserWorkAddress).HasColumnName("user_work_address");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
