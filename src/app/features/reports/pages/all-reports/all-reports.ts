import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

import { Report } from '../../../../core/models/report.model';
import { REPORT_MOCK_DATA } from './report-mock';

@Component({
  selector: 'app-all-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIcon],
  templateUrl: './all-reports.html',
  styleUrl: './all-reports.scss',
})
export class AllReports implements OnInit {
  selectedReportId: number | null = null;

  reports: Report[] = REPORT_MOCK_DATA;
  filteredReports: Report[] = [];

  currentPage = 1;
  pageSize = 5;

  ngOnInit(): void {
    // Initialize data and apply default sorting
    this.filteredReports = [...this.reports];
    this.sortReports('newest');
  }

  selectReport(id: number): void {
    this.selectedReportId = id;
  }

  onSortChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.sortReports(value);
  }

  onSearch(value: string): void {
    const term = value.trim().toLowerCase();

    if (!term) {
      this.filteredReports = [...this.reports];
    } else {
      this.filteredReports = this.reports.filter(
        (report) =>
          report.name.toLowerCase().includes(term) ||
          report.owner.toLowerCase().includes(term) ||
          report.form.toLowerCase().includes(term),
      );
    }

    // Reset pagination when filtering
    this.currentPage = 1;
  }

  deleteReport(id: number, event: Event): void {
    event.stopPropagation();

    const confirmDelete = confirm('Are you sure you want to delete this report?');
    if (!confirmDelete) return;

    // Remove from main dataset
    this.reports = this.reports.filter((r) => r.id !== id);

    // Update filtered list
    this.filteredReports = this.filteredReports.filter((r) => r.id !== id);

    // Adjust pagination if last item removed
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages || 1;
    }
  }

  sortReports(order: string): void {
    if (order === 'newest') {
      this.filteredReports.sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
      );
    } else {
      this.filteredReports.sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime(),
      );
    }

    // Reset page after sorting
    this.currentPage = 1;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  get paginatedReports(): Report[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredReports.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredReports.length / this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get startRecord(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endRecord(): number {
    const end = this.currentPage * this.pageSize;
    return end > this.filteredReports.length ? this.filteredReports.length : end;
  }
}
