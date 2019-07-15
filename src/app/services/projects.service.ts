import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(protected httpClient: HttpClient) { }

  public createNewProject(projectName: string): Promise<any> {
    return this.httpClient.post(`${environment.backendBaseUrl}/tasks`, { name: projectName })
      .toPromise()
      .then(resolve => Promise.resolve(resolve))
      .catch((error: HttpErrorResponse) => Promise.reject(error));
  }
}
