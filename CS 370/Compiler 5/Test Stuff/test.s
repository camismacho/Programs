	.file	"test.c"
	.text
	.comm	x,4,4
	.comm	y,4,4
	.section	.rodata
.LC0:
	.string	"poopy balls1\n"
.LC1:
	.string	"poopy balls2\n"
.LC2:
	.string	"poopy balls3\n"
.LC3:
	.string	"poopy balls4\n"
	.text
	.globl	func
	.type	func, @function
func:
.LFB0:
	.cfi_startproc
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	subq	$32, %rsp
	movl	%edi, -4(%rbp)
	movq	%rsi, -16(%rbp)
	movq	%rdx, -24(%rbp)
	movl	$.LC0, %edi
	call	puts
	movl	$.LC1, %edi
	call	puts
	movl	$.LC2, %edi
	call	puts
	movl	$.LC3, %edi
	call	puts
	nop
	leave
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
.LFE0:
	.size	func, .-func
	.ident	"GCC: (SUSE Linux) 7.4.0"
	.section	.note.GNU-stack,"",@progbits
