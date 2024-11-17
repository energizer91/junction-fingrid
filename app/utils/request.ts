import { notFound, redirect } from "next/navigation";

export interface RequestOptions<TBody = unknown> {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: TBody;
  credentials?: RequestCredentials;
}

export interface RequestResponse<T> {
  data: T | null;
  status: number;
}

export async function request<TResponse = unknown, TBody = unknown>(
  url: string,
  options: RequestOptions<TBody> = {},
): Promise<RequestResponse<TResponse>> {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const { method = "GET", headers, body, credentials } = options;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVICE_URL}/api${url}`,
      {
        method,
        headers: { ...defaultHeaders, ...headers },
        body: body ? JSON.stringify(body) : undefined,
        credentials: credentials || "same-origin",
      },
    );

    const status = response.status;

    if (status === 404) {
      notFound();
    }

    if (status === 403) {
      redirect("/login");
    }

    if (status >= 400) {
      const errorText = await response.text();
      throw new Error(`HTTP Error: ${status}, ${errorText}`);
    }

    const data = await response.json();
    return { data, status };
  } catch (error) {
    console.error("Request failed:", error.message || error);
    return { data: null, status: 500 };
  }
}
