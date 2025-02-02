# Bounty Endpoints

## List Bounties

```http
GET /v1/bounties
```

Retrieve a list of bounties. The response is paginated and can be filtered using query parameters.

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| status | string | Filter by bounty status (open, in_progress, completed) |
| min_amount | number | Minimum bounty amount |
| max_amount | number | Maximum bounty amount |
| page | number | Page number for pagination |
| per_page | number | Number of items per page (max: 100) |

### Response

```json
{
  "data": [
    {
      "id": "123",
      "type": "bounty",
      "attributes": {
        "title": "Fix Memory Leak",
        "description": "Memory leak in production server",
        "amount": 500,
        "status": "open",
        "created_at": "2024-01-15T00:00:00Z",
        "updated_at": "2024-01-15T00:00:00Z"
      },
      "relationships": {
        "issue": {
          "data": {
            "id": "456",
            "type": "issue"
          }
        }
      }
    }
  ],
  "meta": {
    "total_count": 50,
    "page": 1,
    "per_page": 10
  }
}
```

## Get Bounty

```http
GET /v1/bounties/:id
```

Retrieve a specific bounty by its ID.

### Response

```json
{
  "data": {
    "id": "123",
    "type": "bounty",
    "attributes": {
      "title": "Fix Memory Leak",
      "description": "Memory leak in production server",
      "amount": 500,
      "status": "open",
      "created_at": "2024-01-15T00:00:00Z",
      "updated_at": "2024-01-15T00:00:00Z"
    },
    "relationships": {
      "issue": {
        "data": {
          "id": "456",
          "type": "issue"
        }
      }
    }
  }
}
```

## Create Bounty

```http
POST /v1/bounties
```

Create a new bounty.

### Request Body

```json
{
  "title": "Fix Memory Leak",
  "description": "Memory leak in production server",
  "amount": 500,
  "issue_id": "456"
}
```

### Response

```json
{
  "data": {
    "id": "123",
    "type": "bounty",
    "attributes": {
      "title": "Fix Memory Leak",
      "description": "Memory leak in production server",
      "amount": 500,
      "status": "open",
      "created_at": "2024-01-15T00:00:00Z",
      "updated_at": "2024-01-15T00:00:00Z"
    }
  }
}
```

## Update Bounty

```http
PATCH /v1/bounties/:id
```

Update an existing bounty.

### Request Body

```json
{
  "amount": 750,
  "status": "in_progress"
}
```

### Response

```json
{
  "data": {
    "id": "123",
    "type": "bounty",
    "attributes": {
      "title": "Fix Memory Leak",
      "description": "Memory leak in production server",
      "amount": 750,
      "status": "in_progress",
      "created_at": "2024-01-15T00:00:00Z",
      "updated_at": "2024-01-15T00:00:00Z"
    }
  }
}
``` 