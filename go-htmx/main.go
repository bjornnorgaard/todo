package main

import (
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

func main() {

	RunHTMXServer()
}

func RunHTMXServer() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		tmpl := template.Must(template.ParseFiles("index.html"))
		err := tmpl.Execute(w, map[string][]Todo{
			"Todos": {
				Todo{ID: uuid.New(), Title: "Walk the dog", Completed: false},
				Todo{ID: uuid.New(), Title: "Do the dishes", Completed: false},
			},
		})
		if err != nil {
			slog.Error("failed to execute template for index.html", err)
		}
	})

	http.HandleFunc("/add-todo", func(w http.ResponseWriter, r *http.Request) {
		title := r.PostFormValue("new-todo-title")
		if title == "" {
			// TODO: return error
		}
		tmpl := template.Must(template.ParseFiles("index.html"))
		todo := Todo{ID: uuid.New(), Title: title, Completed: false}
		err := tmpl.ExecuteTemplate(w, "todo-item", todo)
		if err != nil {
			slog.Error("failed to execute template for index.html", err)
		}
	})

	slog.Info("Server started at http://localhost:8000")
	log.Fatal(http.ListenAndServe(":8000", nil))
}
