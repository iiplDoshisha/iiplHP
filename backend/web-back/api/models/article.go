package models

import (
	"gorm.io/gorm"
)

type Article struct { //投稿記事を保存するテーブル
	gorm.Model

	Title string
	Text  string
	Image uint16
}
