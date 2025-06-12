# Custom DSL + IDE for Contract Law

Domain-specific language with parser, type system, interpreter/compiler + IDE (highlight, autocomplete, debugger) for contract law.

## Architecture
- **Backend:** Python (lexer/parser/interpreter) + Django
- **Frontend:** React 18 + Vite + Monaco (mock)
- **15 Apps:** lexer, parser, typesystem, interpreter, compiler, ide, debugger, lsp, formatter, testing, api, frontend, analytics, integrations, compliance

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t dsl-contract .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
```

## Features
- **Lexer:** `party`, `obligation`, `shall`, `if`, `then`, `within 30 days`
- **Parser:** `contract "Service Agreement" { party A, party B, clause 1: A shall pay $100 }` → AST
- **Types:** `Obligation, Party, Date, Amount, Condition` with checking `A shall pay` requires `Party`
- **Interpreter:** `execute(contract)` → `breach if not paid within 30 days` → `remedy`
- **IDE:** Monaco highlight, autocomplete `shall`, diagnostics `missing party`, debugger step

## License
Proprietary
