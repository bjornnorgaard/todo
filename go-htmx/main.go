package main

import (
	"fmt"
	"github.com/google/uuid"
	"log"
	"log/slog"
	"net/http"
	"text/template"
)

type Todo struct {
	ID        uuid.UUID `json:"id"`
	Title     string    `json:"title"`
	Completed bool      `json:"completed"`
}

var (
	todos []Todo
)

func main() {
	RunHTMXServer()
}

func RunHTMXServer() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		tmpl := template.Must(template.ParseFiles("index.html"))
		data := map[string][]Todo{"Todos": todos}
		err := tmpl.Execute(w, data)
		if err != nil {
			slog.Error("failed to execute template for index.html", err)
		}

		for _, t := range todos {
			fmt.Printf("%s %t \n", t.Title, t.Completed)
		}
		fmt.Println("--------------------------------------------------")
	})

	http.HandleFunc("/add-todo", func(w http.ResponseWriter, r *http.Request) {
		title := r.PostFormValue("new-todo-title")
		if title == "" {
			// TODO: return error
		}
		tmpl := template.Must(template.ParseFiles("index.html"))
		todo := Todo{ID: uuid.New(), Title: title, Completed: false}
		todos = append(todos, todo)
		err := tmpl.ExecuteTemplate(w, "todo-item", todo)
		if err != nil {
			slog.Error("failed to execute template for index.html", err)
		}
	})

	http.HandleFunc("/toggle-todo", func(w http.ResponseWriter, r *http.Request) {
		id := r.Header.Get("hx-trigger")
		var index int
		for i, t := range todos {
			if t.ID.String() == id {
				index = i
				todos[i].Completed = !todos[i].Completed
				break
			}
		}
		tmpl := template.Must(template.ParseFiles("index.html"))
		err := tmpl.ExecuteTemplate(w, "todo-item", todos[index])
		if err != nil {
			slog.Error("failed to execute template for todo complete for index.html", err)
		}
	})

	slog.Info("Server started at http://localhost:8000")
	log.Fatal(http.ListenAndServe(":8000", nil))
}
