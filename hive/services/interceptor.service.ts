export class InterceptorService {
    intercept(request: RequestInit): RequestInit {
      request.headers = {
        ...request.headers,
        'X-Custom-Header': 'SampleValue'
      };
      return request;
    }
  }
  