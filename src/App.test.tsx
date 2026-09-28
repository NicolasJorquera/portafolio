import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';
import App from './App';

const renderAt = (path: string) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

afterEach(() => {
  cleanup();
  window.history.pushState({}, '', '/');
});

describe('App', () => {
  test('muestra la navegación y el footer', () => {
    renderAt('/');
    expect(screen.getByRole('link', { name: 'Proyectos' })).toBeInTheDocument();
    expect(screen.getByText(/Sígueme en mis redes sociales/)).toBeInTheDocument();
  });

  test.each([
    ['/', /Proyectos importantes/],
    ['/projects', /Tecnología:/],
    ['/projects/flixer', /Resumen del proyecto/],
    ['/resources', /Material de estudio/],
    ['/contact', /Nombre completo/],
  ])('renderiza %s', (path, text) => {
    renderAt(path);
    expect(screen.getAllByText(text).length).toBeGreaterThan(0);
  });

  test('navega desde el navbar sin recargar la página', () => {
    renderAt('/');
    fireEvent.click(screen.getByRole('link', { name: 'Proyectos' }));
    expect(window.location.pathname).toBe('/projects');
    expect(screen.getByText(/Tecnología:/)).toBeInTheDocument();
  });

  test('redirige rutas inexistentes al inicio', () => {
    renderAt('/ruta-que-no-existe');
    expect(window.location.pathname).toBe('/');
  });
});
