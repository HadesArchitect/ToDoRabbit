# ToDoRabbit

A sample todo list application demonstrating modern full-stack development practices and developer tooling for AI code review and team onboarding.

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

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## Project Structure

```
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

---

**Note**: This is a sample application created for demonstration purposes. It is used to showcase AI code review tools, developer onboarding workflows, and modern full-stack development practices. Not intended for production use.
