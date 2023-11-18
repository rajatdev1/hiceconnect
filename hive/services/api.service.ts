
import { InterceptorService } from './interceptor.service';
import { ExceptionService } from './exception.service';

export class ApiService {
  private interceptor = new InterceptorService();
  private exceptionHandler = new ExceptionService();

  async fetchData(url: string) {
    try {
      const modifiedRequest = this.interceptor.intercept({
        method: 'GET',
        headers: {}
        
      });
      const response = await fetch(url, modifiedRequest);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      this.exceptionHandler.handle(error as Error);
    }
  }
}
