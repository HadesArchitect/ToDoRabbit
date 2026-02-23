# ToDoRabbit

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/HadesArchitect/ToDoRabbit?utm_source=oss&utm_medium=github&utm_campaign=HadesArchitect%2FToDoRabbit&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

A sample monorepo todo list application demonstrating modern full-stack development practices and developer tooling for AI code review and team onboarding.

## Tech Stack

**Backend:**

- Python 3.11+
- FastAPI
- SQLAlchemy (async)
- SQLite
- Pydantic v2

**Frontend:**

- React 18+
- TypeScript
- Vite
- CSS Modules

**Infrastructure:**

- Docker
- Docker Compose
- nginx

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Running the Application

Start all services:

```bash
make up
```

Or using Docker Compose directly:

```bash
docker compose up --build
```

### Access the Application

- **Frontend**: <http://localhost:3000>
- **Backend API**: <http://localhost:8000>
- **API Documentation**: <http://localhost:8000/docs>

## Project Structure

```text
todo-app/
├── backend/           # FastAPI backend with async SQLAlchemy
├── frontend/          # React TypeScript frontend with Vite
├── docker-compose.yml # Service orchestration
├── Makefile          # Convenience commands
└── README.md         # This file
```

## Running Tests

### Backend Tests

Run backend tests with pytest:

```bash
make test-backend
```

### Frontend Type Checking

Run TypeScript type checking:

```bash
make test-frontend
```

### All Tests

Run both backend tests and frontend type checking:

```bash
make test
```

## Development

Services can be run individually if needed:

- **Backend**: Runs on port 8000
- **Frontend**: Runs on port 3000

For local development without Docker, refer to the README files in the `backend/` and `frontend/` directories.

## Stopping Services

Stop all running services:

```bash
make down
```

## Cleanup

Remove all Docker volumes, containers, and build artifacts:

```bash
make clean
```
