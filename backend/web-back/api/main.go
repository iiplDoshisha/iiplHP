package main

import (
	"api/database"
	"api/router"
)

func main() {
	// GORMセット
	println("db connecting")
	database.Connect()

	//ルーティングを設定
	e := router.NewRouter()

	// サーバーをポート番号1323で起動
	e.Logger.Fatal(e.Start(":90"))

}
