package com.hotel.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

public class OrderInformation implements Serializable {
    private Integer id;

    private String houseNumber;

    private Byte houseType;

    private String account;

    private String name;

    private String telephone;

    private Date inTime;

    private Date outTime;

    private Byte status;

    private BigDecimal offerMoney;

    private BigDecimal backMoney;

    private Byte houseStatus;

    private Date gmtCteat;

    private Date gmtModeify;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber == null ? null : houseNumber.trim();
    }

    public Byte getHouseType() {
        return houseType;
    }

    public void setHouseType(Byte houseType) {
        this.houseType = houseType;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account == null ? null : account.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone == null ? null : telephone.trim();
    }

    public Date getInTime() {
        return inTime;
    }

    public void setInTime(Date inTime) {
        this.inTime = inTime;
    }

    public Date getOutTime() {
        return outTime;
    }

    public void setOutTime(Date outTime) {
        this.outTime = outTime;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public BigDecimal getOfferMoney() {
        return offerMoney;
    }

    public void setOfferMoney(BigDecimal offerMoney) {
        this.offerMoney = offerMoney;
    }

    public BigDecimal getBackMoney() {
        return backMoney;
    }

    public void setBackMoney(BigDecimal backMoney) {
        this.backMoney = backMoney;
    }

    public Byte getHouseStatus() {
        return houseStatus;
    }

    public void setHouseStatus(Byte houseStatus) {
        this.houseStatus = houseStatus;
    }

    public Date getGmtCteat() {
        return gmtCteat;
    }

    public void setGmtCteat(Date gmtCteat) {
        this.gmtCteat = gmtCteat;
    }

    public Date getGmtModeify() {
        return gmtModeify;
    }

    public void setGmtModeify(Date gmtModeify) {
        this.gmtModeify = gmtModeify;
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        OrderInformation other = (OrderInformation) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getHouseNumber() == null ? other.getHouseNumber() == null : this.getHouseNumber().equals(other.getHouseNumber()))
            && (this.getHouseType() == null ? other.getHouseType() == null : this.getHouseType().equals(other.getHouseType()))
            && (this.getAccount() == null ? other.getAccount() == null : this.getAccount().equals(other.getAccount()))
            && (this.getName() == null ? other.getName() == null : this.getName().equals(other.getName()))
            && (this.getTelephone() == null ? other.getTelephone() == null : this.getTelephone().equals(other.getTelephone()))
            && (this.getInTime() == null ? other.getInTime() == null : this.getInTime().equals(other.getInTime()))
            && (this.getOutTime() == null ? other.getOutTime() == null : this.getOutTime().equals(other.getOutTime()))
            && (this.getStatus() == null ? other.getStatus() == null : this.getStatus().equals(other.getStatus()))
            && (this.getOfferMoney() == null ? other.getOfferMoney() == null : this.getOfferMoney().equals(other.getOfferMoney()))
            && (this.getBackMoney() == null ? other.getBackMoney() == null : this.getBackMoney().equals(other.getBackMoney()))
            && (this.getHouseStatus() == null ? other.getHouseStatus() == null : this.getHouseStatus().equals(other.getHouseStatus()))
            && (this.getGmtCteat() == null ? other.getGmtCteat() == null : this.getGmtCteat().equals(other.getGmtCteat()))
            && (this.getGmtModeify() == null ? other.getGmtModeify() == null : this.getGmtModeify().equals(other.getGmtModeify()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getHouseNumber() == null) ? 0 : getHouseNumber().hashCode());
        result = prime * result + ((getHouseType() == null) ? 0 : getHouseType().hashCode());
        result = prime * result + ((getAccount() == null) ? 0 : getAccount().hashCode());
        result = prime * result + ((getName() == null) ? 0 : getName().hashCode());
        result = prime * result + ((getTelephone() == null) ? 0 : getTelephone().hashCode());
        result = prime * result + ((getInTime() == null) ? 0 : getInTime().hashCode());
        result = prime * result + ((getOutTime() == null) ? 0 : getOutTime().hashCode());
        result = prime * result + ((getStatus() == null) ? 0 : getStatus().hashCode());
        result = prime * result + ((getOfferMoney() == null) ? 0 : getOfferMoney().hashCode());
        result = prime * result + ((getBackMoney() == null) ? 0 : getBackMoney().hashCode());
        result = prime * result + ((getHouseStatus() == null) ? 0 : getHouseStatus().hashCode());
        result = prime * result + ((getGmtCteat() == null) ? 0 : getGmtCteat().hashCode());
        result = prime * result + ((getGmtModeify() == null) ? 0 : getGmtModeify().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", houseNumber=").append(houseNumber);
        sb.append(", houseType=").append(houseType);
        sb.append(", account=").append(account);
        sb.append(", name=").append(name);
        sb.append(", telephone=").append(telephone);
        sb.append(", inTime=").append(inTime);
        sb.append(", outTime=").append(outTime);
        sb.append(", status=").append(status);
        sb.append(", offerMoney=").append(offerMoney);
        sb.append(", backMoney=").append(backMoney);
        sb.append(", houseStatus=").append(houseStatus);
        sb.append(", gmtCteat=").append(gmtCteat);
        sb.append(", gmtModeify=").append(gmtModeify);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}