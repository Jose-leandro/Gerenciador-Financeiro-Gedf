import { renderHook, act } from '@testing-library/react-hooks';
import { applyMenuStyles } from './utils/styleUtils';
import { useVerificationOfDesigMenu } from './utils/verificationOfDesigMenu';
import useAutoRespon from './useAutoRespon';

describe('useAutoRespon', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize and call applyMenuStyles on mount', () => {
    const mockRefs = {
      div: { classOfElement: { current: document.createElement('div') } },
      menuIcon: { classOfElement: { current: document.createElement('div') } },
      divMenu: { classOfElement: { current: document.createElement('div') } },
      menu: { classOfElement: { current: document.createElement('div') } },
      menuUsuario: { classOfElement: { current: document.createElement('div') } },
      menuItem: { classOfElement: { current: document.createElement('div') } },
      usuarioLogin: { classOfElement: { current: document.createElement('div') } },
      usuarioSing: { classOfElement: { current: document.createElement('div') } },
    };

    renderHook(() => useAutoRespon(768, mockRefs, 'menu'));

    // Verify that applyMenuStyles is called on mount
    expect(applyMenuStyles).toHaveBeenCalled();
    expect(applyMenuStyles).toHaveBeenCalledTimes(8); // Called for all 8 elements
  });

  test('should toggle menu styles when menuIcon is clicked', () => {
    const mockRefs = {
      div: { classOfElement: { current: document.createElement('div') } },
      menuIcon: { classOfElement: { current: document.createElement('div') } },
      divMenu: { classOfElement: { current: document.createElement('div') } },
      menu: { classOfElement: { current: document.createElement('div') } },
      menuUsuario: { classOfElement: { current: document.createElement('div') } },
      menuItem: { classOfElement: { current: document.createElement('div') } },
      usuarioLogin: { classOfElement: { current: document.createElement('div') } },
      usuarioSing: { classOfElement: { current: document.createElement('div') } },
    };

    const divMenuStyle = mockRefs.divMenu.classOfElement.current.style;

    const { result } = renderHook(() => useAutoRespon(768, mockRefs, 'menu'));

    // Simulate menuIcon click
    act(() => {
      mockRefs.menuIcon.classOfElement.current.click();
    });

    // Validate menu state and styles
    expect(divMenuStyle.display).toBe('none');
    expect(divMenuStyle.padding).toBe('10px');
  });

  test('should handle window resize', () => {
    const mockRefs = {
      div: { classOfElement: { current: document.createElement('div') } },
      menuIcon: { classOfElement: { current: document.createElement('div') } },
      divMenu: { classOfElement: { current: document.createElement('div') } },
      menu: { classOfElement: { current: document.createElement('div') } },
      menuUsuario: { classOfElement: { current: document.createElement('div') } },
      menuItem: { classOfElement: { current: document.createElement('div') } },
      usuarioLogin: { classOfElement: { current: document.createElement('div') } },
      usuarioSing: { classOfElement: { current: document.createElement('div') } },
    };

    const { result } = renderHook(() => useAutoRespon(768, mockRefs, 'menu'));

    // Simulate window resize
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(applyMenuStyles).toHaveBeenCalled();
  });
});

test('handles missing or empty props gracefully', () => {
    const mockRefs = {
      div: { classOfElement: { current: null } },
      menuIcon: { classOfElement: { current: null } },
      divMenu: { classOfElement: { current: null } },
      menu: { classOfElement: { current: null } },
      menuUsuario: { classOfElement: { current: null } },
      menuItem: { classOfElement: { current: null } },
      usuarioLogin: { classOfElement: { current: null } },
      usuarioSing: { classOfElement: { current: null } },
    };
  
    const { result } = renderHook(() => useAutoRespon(768, mockRefs, 'menu'));
  
    // Check that no errors occur during rendering
    expect(result.error).toBeUndefined();
  
  });

jest.mock('./utils/styleUtils', () => ({
  applyMenuStyles: jest.fn(),
}));

test('calls applyMenuStyles with correct styles', () => {
  const mockRefs = {
    div: { classOfElement: { current: document.createElement('div') } },
    divMenu: { classOfElement: { current: document.createElement('div') } },
  };

  renderHook(() => useAutoRespon(768, mockRefs, 'menu'));

  // Assert that `applyMenuStyles` was called with the correct arguments
  expect(applyMenuStyles).toHaveBeenCalledWith(
    mockRefs.div,
    { justifyContent: 'space-between' }
  );
  expect(applyMenuStyles).toHaveBeenCalledWith(
    mockRefs.divMenu,
    {
      flexDirection: 'column',
      position: 'fixed',
      height: '100vh',
      width: '50%',
      backgroundColor: '#242b37',
      borderRadius: '20px',
      right: '12px',
      top: '52px',
    }
  );
});

  
