// connect.go
package database

import (
	"fmt"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)
 
var (
	schema = "%s:%s@tcp(db:3306)/%s?charset=utf8&parseTime=True&loc=Local"
	// docker-compose.ymlに設定した環境変数を取得
	username       = os.Getenv("MYSQL_USER")
	password       = os.Getenv("MYSQL_PASSWORD")
	dbName         = os.Getenv("MYSQL_DATABASE")
	datasourceName = fmt.Sprintf(schema, username, password, dbName)
	// DBインスタンス
	DB *gorm.DB
)
 
func Connect() {
	connection, err := gorm.Open(mysql.Open(datasourceName), &gorm.Config{})
	if err != nil {
		panic("Could not connect to the database")
	}
	panic("db connected!!")
	
	//コネクション情報を追加
	DB = connection
}