package spring.project.springbarberreservation.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import spring.project.springbarberreservation.requests.AddCalendarRequest;
import spring.project.springbarberreservation.requests.UpdateCalendarRequest;
import spring.project.springbarberreservation.responses.CalendarResponse;
import spring.project.springbarberreservation.responses.MessageResponse;
import spring.project.springbarberreservation.services.CalendarService;

@RequestMapping("/calendars")
@RestController
@RequiredArgsConstructor
public class CalendarController {
private final CalendarService service;

@GetMapping
public List<CalendarResponse> getCalendarsList(){
	return service.getCalendarsList().stream().map(CalendarResponse::fromEntity).toList();
}
@GetMapping("/{id}")
public CalendarResponse getCalendarById(@PathVariable Long id) {
	return CalendarResponse.fromEntity(service.getCalendarById(id));
}
@PostMapping("/{addCalendar}")
public MessageResponse addCalendar(@RequestBody @Valid AddCalendarRequest addCalendarRequest) {
	return service.addCalendar(addCalendarRequest.toEntity()); 
}
@PutMapping("/{id}")
public MessageResponse updateCalendar(@PathVariable Long id, @RequestBody @Valid  UpdateCalendarRequest updateCalendarRequest) {
	return service.updateCalendar(id, updateCalendarRequest.toEntity());
}
@DeleteMapping("/{id}")

public MessageResponse deleteCalendar(@PathVariable Long id) {
	return service.deleteCalendar(id);
}
}
