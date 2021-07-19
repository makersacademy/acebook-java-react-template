package com.makersacademy.acebook.model;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;
import java.time.format.DateTimeFormatter;  
import java.time.LocalDateTime; 
import java.util.Date;

import lombok.Data;

@Data
@Entity
@Table(name = "POSTS")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;
    private String userName;
    private String date;

    private Post() {}

    public Post(String content) {
        this.setContent(content);
        this.setUserName("TestUser123");
        this.createDateTimeStamp();
        this.id = null;
    }
    
    public void createDateTimeStamp() {
    	DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
    	LocalDateTime now = LocalDateTime.now();  
//    	System.out.println(dateTimeFormatter.format(now));  
        
        this.setDate(dateTimeFormatter.format(now));
      }

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
	
	public Long getID() {
		return id;
	}
	
	public void setID(Long id) {
		this.id = id;
	}
	
	  @Override
	  public String toString() {
	    return String.format(
	        "Post[id=%d, content='%s', userName='%s']",
	        id, content, userName);
	  }

}
//
