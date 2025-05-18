export class TwClassHelpers {
    static buildIconButtonClass(placement, base) {
        let extras = ' ';
        switch (placement) {
            case 'top':
                extras = 'flex-col py-32';
                break;
            case 'right':
                extras = 'flex-row';
                break;
            case 'bottom':
                extras = 'flex-col-reverse py-32';
                break;
            case 'left':
            default:
                extras = 'flex-row-reverse';
                break;
        }
        return `${base} ${extras}`;
    }
    static buildIconClass(placement, size) {
        switch (placement) {
            case 'right':
                return `${size} mr-4`;
            case 'left':
                return `${size} ml-4`;
            case 'bottom':
                return `${size} mt-2`;
            case 'top':
            default:
                return `${size} mb-2`;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHctY2xhc3MtaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3JjL2xpYi9jb21tb24vdHctY2xhc3MtaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sY0FBYztJQUNsQixNQUFNLENBQUMsb0JBQW9CLENBQ2hDLFNBQW9CLEVBQ3BCLElBQVk7UUFFWixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDakIsUUFBUSxTQUFTLEVBQUU7WUFDakIsS0FBSyxLQUFLO2dCQUNSLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQztnQkFDMUIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixNQUFNLEdBQUcsVUFBVSxDQUFDO2dCQUNwQixNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLE1BQU0sR0FBRyx3QkFBd0IsQ0FBQztnQkFDbEMsTUFBTTtZQUNSLEtBQUssTUFBTSxDQUFDO1lBQ1o7Z0JBQ0UsTUFBTSxHQUFHLGtCQUFrQixDQUFDO2dCQUM1QixNQUFNO1NBQ1Q7UUFFRCxPQUFPLEdBQUcsSUFBSSxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxNQUFNLENBQUMsY0FBYyxDQUMxQixTQUFvQixFQUNwQixJQUFZO1FBRVosUUFBUSxTQUFTLEVBQUU7WUFDakIsS0FBSyxPQUFPO2dCQUNWLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQztZQUN4QixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDO1lBQ3hCLEtBQUssUUFBUTtnQkFDWCxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUM7WUFDeEIsS0FBSyxLQUFLLENBQUM7WUFDWDtnQkFDRSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUM7U0FDekI7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tICcuL3BsYWNlbWVudHMnO1xuXG5leHBvcnQgY2xhc3MgVHdDbGFzc0hlbHBlcnMge1xuICBwdWJsaWMgc3RhdGljIGJ1aWxkSWNvbkJ1dHRvbkNsYXNzKFxuICAgIHBsYWNlbWVudDogUGxhY2VtZW50LFxuICAgIGJhc2U6IHN0cmluZ1xuICApOiBzdHJpbmcge1xuICAgIGxldCBleHRyYXMgPSAnICc7XG4gICAgc3dpdGNoIChwbGFjZW1lbnQpIHtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIGV4dHJhcyA9ICdmbGV4LWNvbCBweS0zMic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBleHRyYXMgPSAnZmxleC1yb3cnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIGV4dHJhcyA9ICdmbGV4LWNvbC1yZXZlcnNlIHB5LTMyJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGV4dHJhcyA9ICdmbGV4LXJvdy1yZXZlcnNlJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAke2Jhc2V9ICR7ZXh0cmFzfWA7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGJ1aWxkSWNvbkNsYXNzKFxuICAgIHBsYWNlbWVudDogUGxhY2VtZW50LFxuICAgIHNpemU6IHN0cmluZ1xuICApOiBzdHJpbmcge1xuICAgIHN3aXRjaCAocGxhY2VtZW50KSB7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHJldHVybiBgJHtzaXplfSBtci00YDtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICByZXR1cm4gYCR7c2l6ZX0gbWwtNGA7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICByZXR1cm4gYCR7c2l6ZX0gbXQtMmA7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGAke3NpemV9IG1iLTJgO1xuICAgIH1cbiAgfVxufVxuIl19