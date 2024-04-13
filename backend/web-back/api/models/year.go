package models

import ("gorm.io/gorm")

type Year struct{//ユーザーの学年を保存するテーブル
	gorm.Model

	Year int
}